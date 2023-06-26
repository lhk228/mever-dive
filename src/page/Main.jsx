
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { CompassFilled, LoginOutlined } from "@ant-design/icons";

import { userState, alertState } from "../recoil/state";
import logo from "../logo.png"
import ToastAlert from "./../component/ToastAlert";


const Main = () => {
	const [userInfo, setUserInfo] = useRecoilState(userState);
	const [landing, setLanding] = useState(false);
	const resetUser =  useResetRecoilState(userState);

	const { show, type, msg, delay, openClass } = useRecoilValue(alertState);
	const toastAlert = useSetRecoilState(alertState);

	useEffect(() => { setLanding(true); resetUser(); console.log("userState :",userInfo) }, [])

	const guestLogin = () => {
		setLanding(false);
		setUserInfo({...userInfo, user_nm:"GUEST", login:true});
		toastAlert({ msg: `GUEST 로그인되었습니다` });
	}

	return (
		<div className="page-container">
			<div className={`main-page`}>
				<img src={logo} alt="" className={`start-img ${landing && "show"}`} />
				<p className={`main-msg ${landing && "show"}`}>조각이 모여 비교할 수 없는 가치로</p>
				<Link to="/login" style={{width:"100%"}}>
					<button className={`btn-login btn btn-pbg ${landing && "show"}`}>로그인<LoginOutlined /></button>
				</Link>
				<Link to="/reference" style={{width:"100%"}} onClick={ guestLogin }>
					<button className={`btn-start btn btn-pbg ${landing && "show"}`}>체험하기<CompassFilled /></button>
				</Link>
				<span className={`powered-by ${landing && "show"}`}>powered by meVer</span>
			</div>
			<ToastAlert show={show} type={type} msg={msg} delay={delay} openClass={openClass} />
		</div>
		
	)
}

export default Main;
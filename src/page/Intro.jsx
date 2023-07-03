
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { CompassFilled, LoginOutlined } from "@ant-design/icons";

import { userState, alertState } from "../recoil/state";
import logo from "../logo.png"
import ToastAlert from "../component/ToastAlert";


const Intro = () => {
	const [userInfo, setUserInfo] = useRecoilState(userState);
	const [landing, setLanding] = useState(false);
	const resetUser =  useResetRecoilState(userState);

	const { show, type, msg, delay, openClass } = useRecoilValue(alertState);
	const toastAlert = useSetRecoilState(alertState);

	useEffect(() => { setLanding(true); resetUser(); console.log("userState :",userInfo) }, [])

	const guestLogin = () => {
		setLanding(false);
		setUserInfo({...userInfo, user_nm:"GUEST", user_id:"GUEST", user_grade:"게스트", login:true});
		toastAlert({ msg: `GUEST 로그인되었습니다` });
	}

	return (
		<div className="page-container">
			<div className={`intro-page`}>
				<img src={logo} alt="" className={`start-img ${landing && "show"}`} />
				<p className={`intro-msg ${landing && "show"}`}>DIVE THE METAVERSE</p>
				<Link to="/login" style={{width:"100%"}}>
					<button className={`btn-login btn btn-pbg ${landing && "show"}`}>로그인<LoginOutlined /></button>
				</Link>
				<Link to="/main" style={{width:"100%"}} onClick={ guestLogin }>
					<button className={`btn-start btn btn-pbg ${landing && "show"}`}>체험하기<CompassFilled /></button>
				</Link>
				<span className={`powered-by ${landing && "show"}`}>powered by meVer</span>
			</div>
			<ToastAlert show={show} type={type} msg={msg} delay={delay} openClass={openClass} />
		</div>
		
	)
}

export default Intro;

import { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

import { pageState, userState, alertState } from "../recoil/state";
import ToastAlert from "./../component/ToastAlert";

const Login = () => {
  //페이지세팅
  const setPageInfo = useSetRecoilState(pageState);

  //유저세팅
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const tmp_login_info = {tmp_id:"admin", tmp_pw:"1234"};
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({id:'', pw:''});

  //토스트 알람
	const toastAlert = useSetRecoilState(alertState);
	const { show, type, msg, delay, openClass } = useRecoilValue(alertState);

  const googleError = (res) => {
    console.log('err res :',res);
  }

  const googleOK = (response) => {
    if (response) {
      // 사용자 정보 출력
      console.log('response',response);
      const loginInfo = jwtDecode(response.credential);
      const { name, picture, email } = loginInfo;

      setUserInfo({...userState, user_nm:name, login:true });
      navigate("/main");
      toastAlert({ msg: `${name}님 안녕하세요!` });
    }
  }

  const handleLoginClick = () => {
    const { id, pw } = loginInfo;
    const { tmp_id, tmp_pw } = tmp_login_info;
    if(id === tmp_id && pw === tmp_pw ){
      setUserInfo({...userState, user_nm:"관리자", login:true });
      navigate("/main");
      toastAlert({ msg: `로그인에 성공하였습니다` });

    } else {
      toastAlert({ msg: `계정정보가 틀렸습니다` });
    }
  } 

  useEffect(() => { setPageInfo({...pageState, title:"LOGIN"})}, [])
  
  return (
    <div className="page-container">
      <div className="login-page flex-column-center">
        <img src={'/dive/images/logo.png'} alt="" className={`main-logo`}/>
        <p className="logo-text">DIVE THE METAVERSE</p>
        <input type="text" placeholder="아이디를 입력해주세요" onChange={(e)=>{setLoginInfo({...loginInfo, id:e.target.value})}}/>
        <input type="password" placeholder="비밀번호를 입력해주세요" onChange={(e)=>{setLoginInfo({...loginInfo, pw:e.target.value})}}/>
        <button className="btn btn-pbg login-btn" onClick={ handleLoginClick }>로그인</button>
        <div className="submenu-area flex-row-sb">
          <div className="social-login-btn">
            <img className="social-login-logo" src="/dive/images/google-logo.png" alt=""  />
            GOOGLE LOGIN
            <GoogleLogin
            buttonText="Google로 로그인"
            accessType="offline"
            onSuccess={googleOK}
            onFailure={googleError}
            cookiePolicy={'single_host_origin'}
          /></div>

          <p className="join-menu">계정이 없으신가요? 
          <span className="join-btn" onClick={ () => {toastAlert({msg:"현재 가입기간이 아닙니다"})} }> 회원가입</span>
          </p>
        </div>
      </div>
			<ToastAlert show={show} type={type} msg={msg} delay={delay} openClass={openClass} />
    </div>
  )
}

export default Login;
import { Outlet, Link, useNavigate } from "react-router-dom";
import { DropboxCircleFilled, CreditCardFilled, ScheduleFilled, SlidersFilled, BellOutlined, VerticalAlignBottomOutlined, LogoutOutlined } from "@ant-design/icons";
import { pageState, userState, alertState } from "../recoil/state";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import ToastAlert from "./../component/ToastAlert";

const MainLayout = () => {
  
  	//toastAlert 상태관리
	const { show, type, msg, delay, openClass } = useRecoilValue(alertState);
	const toastAlert = useSetRecoilState(alertState);

  //전역 페이지 정보 가져오기
  const pageInfo = useRecoilValue(pageState); 

  //유저정보
  const userInfo = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  
  const navigate = useNavigate();
  const initPage = () => {
    resetUser();
    navigate('/main');
    toastAlert({ msg: `로그아웃 되었습니다` });

  }
  return (
    <>       
      <header className={`flex-row-sb  ${pageInfo.title === "상세정보" && 'hidden'}`}>
        <div className="header-title">{pageInfo.title}</div>
        <div className="header-button">
          {
            userInfo.user_nm === "GUEST" ? 
            <LogoutOutlined onClick={ () => {initPage()} }/>
            : 
            <BellOutlined onClick={ () => {initPage();}}/>
          }
          
          
        </div>
      </header> 
      <nav id="BOTTOM_BAR" className={`flex-row-center ${pageInfo.title === "상세정보" && 'hidden'}`}>
        <Link to="/reference"><DropboxCircleFilled /></Link>
        <Link to="/view"><ScheduleFilled /></Link>
        <Link to="/wallet"><CreditCardFilled /></Link>
        <Link to="/download"><SlidersFilled /></Link>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
			<ToastAlert show={show} type={type} msg={msg} delay={delay} openClass={openClass} />
    </>
  )
}

export default MainLayout;
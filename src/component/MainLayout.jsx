import { Outlet, useNavigate } from "react-router-dom";
import { SearchOutlined, MenuOutlined} from "@ant-design/icons";
import { pageState, userState, alertState, menuState } from "../recoil/state";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import ToastAlert from "./../component/ToastAlert";
import Menu from "./../component/Menu";

const MainLayout = () => {
  
  const navigate = useNavigate();
  
  	//toastAlert 상태관리
	const { show, type, msg, delay, openClass } = useRecoilValue(alertState);
	const toastAlert = useSetRecoilState(alertState);

  //전역 페이지 정보 가져오기
  const pageInfo = useRecoilValue(pageState); 

  //유저정보
  const userInfo = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  
  //메뉴 상태관리
  const [ menu, setMenu ]  = useRecoilState(menuState);
  
  const initPage = () => {
    resetUser();
    navigate('/main');
    toastAlert({ msg: `로그아웃 되었습니다` });
  }

  const handleMenuClick = () => {
    setMenu(!menu);
  }

  const handleSearchClick = () => {
    navigate("/search");
  }
  return (
    <>       
      <header className={`flex-row-sb  ${pageInfo.title === "상세정보" && 'hidden'}`}>
        <div className="header-logo"><img src="/dive/images/logo.png" alt="" /></div>
        <div className="header-center flex-column-center">
          <p className="header-title">{pageInfo.title}</p>
          <p className="header-subtitle">{pageInfo.subtitle}</p>
        </div>
        <div className="header-button">
          <SearchOutlined onClick={handleSearchClick}/>
          <MenuOutlined onClick={handleMenuClick}/>
        </div>
      </header> 
      <Menu/>
      <footer id="BOTTOM_BAR" className={`flex-row-center ${pageInfo.title === "상세정보" && 'hidden'}`}>
        <img src="/dive/images/btn_upload.png" alt="" />
      </footer>
      <section>
        <Outlet></Outlet>
      </section>
			<ToastAlert show={show} type={type} msg={msg} delay={delay} openClass={openClass} />
    </>
  )
}

export default MainLayout;
import { CloseOutlined } from "@ant-design/icons";
import { menuState, alertState, userState } from "../recoil/state";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Menu = () => {

  const navigate = useNavigate();
  const toastAlert = useSetRecoilState(alertState);
  
  //유저정보
  const userInfo = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  
  //메뉴 상태관리
  const [ menu, setMenu ]  = useRecoilState(menuState);
 
  const handleMenuClick = () => {
    setMenu(!menu);
  }

  //초기화(로그아웃)
  const initPage = () => {
    resetUser();
    navigate('/intro');
    toastAlert({ msg: `로그아웃 되었습니다` });
    setMenu(!menu);
  }

  return (
    <nav className={menu && "on"}>
      <CloseOutlined onClick={handleMenuClick}/>
      <div className="menu-container">

        <div className="profile-container flex-row-start">
          <div className="profile-img"></div>
          <div className="profile-content">
            <p className="user-id">{userInfo.user_nm}</p>
            <p className="user-profile">{userInfo.user_grade}</p>
          </div>
        </div>

        <ul className="menu-list">
          <li><span></span> 내 정보</li>
          <li><span></span> 보관함</li>
          <li><span></span> 공지사항</li>
          <li><span></span> 문의하기</li>
          <li onClick={ initPage }><span></span> 로그아웃</li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Menu;
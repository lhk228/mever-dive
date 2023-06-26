import { CloseOutlined } from "@ant-design/icons";
import { menuState } from "../recoil/state";
import { useRecoilState } from "recoil";

const Menu = () => {

  //메뉴 상태관리
  const [ menu, setMenu ]  = useRecoilState(menuState);
 
  const handleMenuClick = () => {
    setMenu(!menu);
  }

  return (
    <nav className={menu && "on"}>
      <CloseOutlined onClick={handleMenuClick}/>
      <div className="menu-container">

        <div className="profile-container flex-row-start">
          <div className="profile-img"></div>
          <div className="profile-content">
            <p className="user-id">MEVER</p>
            <p className="user-profile">안녕하세요</p>
          </div>
        </div>

        <ul className="menu-list">
          <li><span></span> 내 정보</li>
          <li><span></span> 보관함</li>
          <li><span></span> 공지사항</li>
          <li><span></span> 문의하기</li>
          <li><span></span> 로그아웃</li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Menu;
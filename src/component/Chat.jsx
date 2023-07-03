import { CloseOutlined } from "@ant-design/icons";
import { menuState, alertState, userState } from "../recoil/state";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Chat = () => {

  const navigate = useNavigate();
  const toastAlert = useSetRecoilState(alertState);
  
  //유저정보
  const userInfo = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  
  //메뉴 상태관리
  const [ menu, setMenu ]  = useRecoilState(menuState);


  return (
    <>
    <div></div>
    </>
  )
}

export default Chat;
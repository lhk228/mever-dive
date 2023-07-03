import { CloseOutlined } from "@ant-design/icons";
import { menuState, alertState, userState } from "../recoil/state";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Upload = () => {

  const navigate = useNavigate();
  const toastAlert = useSetRecoilState(alertState);
  
  //유저정보
  const userInfo = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  
  //메뉴 상태관리
  const [ menu, setMenu ]  = useRecoilState(menuState);

  return (
    <>
    <div className="input-wrap">
      <p>제목</p>
      <input type="text" />
    </div>
    <div className="input-wrap">
      <p>부제목</p>
      <input type="text" />
    </div>
    <div className="input-wrap">
      <p>설명</p>
      <input type="text" />
    </div>
    <div className="button-area">
      <button className="btn btn-pbg">업로드</button>
      <button className="btn btn-black">취소</button>
    </div>
    </>
  )
}

export default Upload;
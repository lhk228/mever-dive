
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageState } from "../recoil/state";
import { WarningFilled } from "@ant-design/icons";

const Setting = () => {
  const setPageInfo = useSetRecoilState(pageState);
  useEffect(() => { setPageInfo({...pageState, title:"SETTING"})}, [])
  
  return (
    <div className="page-container">
      <div className="tmp-container">
        <WarningFilled />
        <p className="tmp-title">페이지 준비중입니다</p>
        <p className="tmp-msg">SETTING PAGE</p>
      </div>
    </div>
  )
}

export default Setting;
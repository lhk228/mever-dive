
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, alertState } from "../recoil/state";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, HeartFilled, CompassFilled, WechatFilled, InfoCircleFilled, UploadOutlined } from "@ant-design/icons";

const Main = () => {

  const [pageInfo, setPageInfo] = useRecoilState(pageState);
	const toastAlert = useSetRecoilState(alertState);
  const navigate = useNavigate();
  const [ heart, setHeart ] = useState(false);

  const handleHeartClick = () => {
    setHeart(!heart);
  }
  return (
    <>
      <div className="discover-container">
        <div className="icon-container">
          { heart ? <HeartFilled onClick={handleHeartClick}/> : <HeartOutlined onClick={handleHeartClick}/> }
          <UploadOutlined />
          <WechatFilled />
        </div>
          <InfoCircleFilled/>
          <CompassFilled/>
        <iframe src="https://my.matterport.com/show/?play=1&share=0&wh=0&m=kU9eeAy9kCj" frameborder="0"></iframe>
      </div>
    </>
  )
}

export default Main;
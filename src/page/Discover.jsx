
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, alertState } from "../recoil/state";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, HeartFilled, CompassFilled, WechatFilled, InfoCircleFilled, UploadOutlined } from "@ant-design/icons";
import Info from "../component/Info"
import Chat from "../component/Chat"
import Upload from "../component/Upload"

const Main = () => {

	const [pageInfo, setPageInfo] = useRecoilState(pageState);
	const toastAlert = useSetRecoilState(alertState);
	const navigate = useNavigate();
	const [ heart, setHeart ] = useState(false);
	const [ popName, setPopName ] = useState("");
	const [ popup, setPopup ] = useState(false);
	const handleHeartClick = () => {
		setHeart(!heart);
	}

	const handleShareClick = () => {
		if (navigator.share) {
			navigator.share({
					title: 'MEVER-DIVE',
					text: '테스트 메세지',
					url: 'https://mever.me/dive',
			});
		}else{
			alert("공유하기가 지원되지 않는 환경 입니다.")
		}
  }

	const handleChatClick = () => {
		setPopName("채팅")
		setPopup(true)
	}

	const handleInfoClick = () => {
		setPopName("상세정보")
		setPopup(true)
	}

	const handleUploadClick = () => {
		setPopName("업로드")
		setPopup(true)
	}

	const handlePopBackClick = () => {
		setPopup(false);
	}

	const handleWrapperClick = (e) => {
		e.stopPropagation();
	}

	const pageHandler = (popName) => {
		switch(popName)
		{
			case "채팅": return <Chat/>;
			case "상세정보":return <Info/>;
			case "업로드":return <Upload/>;
			default:break;
		}
	}

	return (
		<>
			<div className="discover-container">
				<div className="icon-container">
					<HeartFilled onClick={handleHeartClick} className={heart && `selected`}/>
					<UploadOutlined onClick={handleShareClick}/>
					<WechatFilled onClick={handleChatClick}/>
				</div>
					<InfoCircleFilled onClick={handleInfoClick}/>
					<CompassFilled/>
					<img className="btn-upload" src="/dive/images/btn_upload.png" alt="" onClick={handleUploadClick}/>
					<div className={`discover-popup-container ${popup && "show"}`} onClick={handlePopBackClick}>
						<div className="popup-wrapper" onClick={ handleWrapperClick }>
							<div className="popup-header">{popName}</div>
							<div className="popup-main">{pageHandler(popName)}</div>
						</div>
					</div>
				<iframe src="https://my.matterport.com/show/?play=1&share=0&wh=0&m=kU9eeAy9kCj" frameborder="0"></iframe>
			</div>
		</>
	)
}

export default Main;
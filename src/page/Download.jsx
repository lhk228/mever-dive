import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { AppleFilled, AndroidFilled } from "@ant-design/icons";
import { pageState } from "../recoil/state";

import logo from "../logo.png"

const Download = () => {
	const setPageInfo = useSetRecoilState(pageState);
	const [ landing, setLanding] = useState(false)
	const [deferredPrompt, setDeferredPrompt] = useState(null);
  useEffect(() => {
		setLanding(true); setPageInfo({...pageState, title:"정보"});
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      console.log("event ",event)
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleAppInstall = () => {

    if (deferredPrompt) {
      console.log("설치팝업")
      deferredPrompt.prompt();
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('사용자가 앱을 설치했습니다.');
          } else {
            console.log('사용자가 앱 설치를 거부했습니다.');
          }
          setDeferredPrompt(null);
        });
    }
  };


	return (
		<>
			<div className={`download-page flex-row-center ${landing ? "" : "hidden"}`}>
				<img src={logo} alt="" />
				<p className="download-msg">보다 최적화된 환경에서 이용해보세요</p>
				<button className={`btn-download btn btn-pbg`} onClick={handleAppInstall}>ANDROID <AndroidFilled style={{fontSize:18}} /></button>
				<button className={`btn-download btn btn-pbg btn-disable`} onClick={handleAppInstall}>IOS <AppleFilled style={{fontSize:18}} /></button>
				<p className="version">0.0.1</p>
				<p className="copyright">ⓒ meVer</p>
			</div>
		</>
	)
}

export default Download;
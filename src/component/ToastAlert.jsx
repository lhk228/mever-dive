import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { alertState } from "../recoil/state";

const ToastAlert = ({ show=true, type='ok', msg, delay=2000 }) => {
  //alert 상태관리
  const [open, setOpenClass] = useState(""); //toastAlert 클래스관리(애니메이션)
  const [toastState, setToastState] = useRecoilState(alertState);

	useEffect(() => {
		setOpenClass('open');
		let tmp_hold_timer = setTimeout(() => { setToastState({...toastState, show:false})},delay);
		
		return () => { clearTimeout(tmp_hold_timer); } 

	}, [show])

	if(show){ return( <div className={`toast-alert ${type} ${open}`}>{msg}</div> )}
	else { return( <div className={`toast-alert ${type}`}>{msg}</div> )}
}

export default ToastAlert;

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageState, alertState } from "../recoil/state";
import { PlusCircleOutlined, DropboxOutlined } from "@ant-design/icons";

const Wallet = () => {
	const setPageInfo = useSetRecoilState(pageState);
	const toastAlert = useSetRecoilState(alertState);

	useEffect(() => { setPageInfo({...pageState, title:"WALLET"})}, [])
	
	return (
		<div className="page-container">
			<div className="wallet-page">

				<div className="my-money-wrapper flex-row-center">
					<div className="my-money-text">
						<p className="title">나의 예치금 잔액</p>
						<p className="value">0 원 <span style={{fontSize:14, paddingLeft:10}}>	▶</span></p>
					</div>
					<img src='/dive/images/gift.jpg' className="my-money-img"/>
				</div>
				
				<div className="my-account-wrapper">
					<p>등록된 계좌</p>
					<div className="my-account-list">
						<PlusCircleOutlined className="btn-add-account" onClick={ () => {toastAlert({msg:"로그인 후 이용가능합니다"})} }/>
					</div>
				</div>

				<div className="my-piece-wrapper flex-column-center">
					<p className="title">소유 조각</p>
					<span className="tmp-text">텅</span>
					<DropboxOutlined />
					<p className='subtext'>현재 소유한 조각이 없습니다</p>
					<p className='subtext'>얼른 조각구매를 시작해보세요!</p>
				</div>


			</div>
		</div>

	)
}

export default Wallet;
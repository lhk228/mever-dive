
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { pageState } from "../recoil/state";
import { ArrowUpOutlined, ArrowDownOutlined, CrownFilled, GiftFilled, LikeFilled, SafetyCertificateFilled } from "@ant-design/icons";

const Detail = () => {
	const [pageInfo, setPageInfo] = useRecoilState(pageState);
	const [infoPop, setInfoPop] = useState(false);
	const [item, setItem] = useState({});
	
	//세자리마다 콤마찍기
	function numCommas(x) {
		if (x !== undefined && x !== null) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
			return "";
		}
	}

	useEffect(() => { 
		setPageInfo({...pageInfo, title:"상세정보"});
		let { title, subtitle, path, contents, date, url, price } = pageInfo.info;
		setItem({ title, subtitle, path, contents, date, url, price });
	}, [])
	
	return (
		<div className="page-container">
			<div className="iframe-wrapper">
				<iframe src={`${item.url}`} frameBorder="0" title="test"></iframe>
			</div>
			<div className={`item-info-container flex-column-start ${infoPop && 'show'}`}>
				<div className={`item-info-header`} onClick={ () => {setInfoPop(!infoPop)} }>
					상세정보
					{ infoPop === false ? <ArrowUpOutlined /> : <ArrowDownOutlined /> }
				</div>
				<div className="item-info-main">
					<p className="item-wrap-title">판매 현황</p>
					<div className="sales-progress-container">
						<div className="bar-wrapper">
							<div className="progress-bar" style={ {width:infoPop && parseInt((item.price/5000000000)*100)+"%"}}></div>
						</div>
						<div className="sales-text-wrapper">
							<p className="sales-title">총 판매 누적 금액</p>
							<p className="sales-amount">{numCommas(item.price)} 원</p>
							<p className="sales-percent">{parseInt((item.price/5000000000)*100)}%</p>
						</div>
					</div>
					<div className="sales-summary-wrapper">
						<div className="sales-summary-text flex-row-sb">
							<p className="title">총 판매금액</p>
							<p className="amount">{numCommas(item.price)}</p>
						</div>
						<div className="sales-summary-text flex-row-sb">
							<p className="title">판매 기간</p>
							<p className="amount">2023.05.29 ~ 2023.06.31</p>
						</div>
					</div>
					<p className="item-wrap-title">투자 포인트</p>
					<div className="sales-point-wrapper flex-row-center">
						<div>
							<CrownFilled />
							<p className="point-text">판매1등</p>
						</div>
						<div>
							<GiftFilled />
							<p className="point-text">선물용</p>
						</div>
						<div>
							<LikeFilled />
							<p className="point-text">추천상품</p>
						</div>
						<div>
							<SafetyCertificateFilled />
							<p className="point-text">안전보장</p>
						</div>
					</div>
					<p className="item-wrap-title">판매 정보</p>
					<div className="sales-info-wrapper">
						<div className="sales-info-contents">
							<p className="title">포트폴리오</p>
							<p className="value">{item.title}</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">부제</p>
							<p className="value">{item.subtitle}</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">설명</p>
							<p className="value">{item.contents}</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">URL</p>
							<p className="value">{item.url}</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">총 판매금액</p>
							<p className="value">{numCommas(item.price)}</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">구매가능금액</p>
							<p className="value">최소 1만 원 ~ 최대 1,000만 원</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">운용기간</p>
							<p className="value">1년 (조기 분배 가능)</p>
						</div>
						<div className="sales-info-contents">
							<p className="title">게시날짜</p>
							<p className="value">{item.date}</p>
						</div>
					</div>

				</div>
				<div className={`item-info-bottom flex-row-center ${infoPop && "show"}`}>
					<button className="btn btn-pbg">구매하기</button>
				</div>
			</div>
		</div>
	)
}

export default Detail;
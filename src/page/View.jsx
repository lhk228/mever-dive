
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageState, alertState } from "../recoil/state";

const View = () => {
	const setPageInfo = useSetRecoilState(pageState);
	
  useEffect(() => { setPageInfo({...pageState, title:"VIEW"}); handleMenuClick();}, [])

  const handleMenuClick = () => {
    const headerMenu = document.querySelectorAll(".view-header li");

    headerMenu.forEach((v) => { 
      v.addEventListener('click', (e) => { 
        console.log("zz");
        headerMenu.forEach((k) => {
          k.classList.remove("selected");
        });
        v.classList.add("selected");
      });
    });
  }


  return (
    <div className="page-container">
      <div className="view-page nowrap">
        <img alt='' src='/dive/images/magazine.jpg' className="view-top-img"/>
        <div className="view-container">
          <ul className="view-header flex-row-start">
            <li>전체</li>
            <li>포트폴리오</li>
            <li>트렌드</li>
            <li>최신뉴스</li>
            <li>핫플레이스</li>
          </ul>
          <div className="view-list">
          {
            Array.from({ length: 20 }, (_, index) => (
              <div key={index} className="view-list-item">
                <div className="view-list-text">
                  <p className="title">블루칩 서비스 오픈</p>
                  <p className="subtitle">서비스 내용 상세</p>
                  <p className="contents">2023.05.30 서비스..</p>
                </div>
                <div className="view-list-thumb"></div>
              </div>
            ))
          }
          <div className="footer-box"></div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default View;
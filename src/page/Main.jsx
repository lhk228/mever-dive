
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, alertState } from "../recoil/state";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const [pageInfo, setPageInfo] = useRecoilState(pageState);
  const navigate = useNavigate();

  useEffect(() => { setPageInfo({...pageInfo, title:"HOME", subtitle:"오늘의 투어"})}, []);

  return (
    <>
    <div className="main-container">
      <div className="content-box">
        <p className="content-title">TOP 10</p>
        <ul className="content-list">
          <li onClick={ () => {navigate("/discover")} }>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-box">
        <p className="content-title">주목할만한 장소</p>
        <ul className="content-list">
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
        </ul>
      </div>
      <h2 style={{marginLeft:20}}>카테고리별</h2>
      <div className="content-box">
        <p className="content-title">CATEGORY #1</p>
        <ul className="content-list">
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-box">
        <p className="content-title">CATEGORY #2</p>
        <ul className="content-list">
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
          <li>
            <div className="thumb"></div>
            <div className="context">
              <p className="title">제목</p>
              <p className="desc">설명</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Main;
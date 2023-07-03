import { useEffect, useState } from "react"
import { LeftOutlined, SearchOutlined, DatabaseFilled, EnvironmentFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SearchList from "../component/SearchList";
import KakaoMap from "../component/KakaoMap";
import { useRef } from "react";
const Search = () => {

  const navigate = useNavigate();
  const [ page, setPage ] = useState(false);
  const [ align, setAlign ] = useState(true);
  const [ place, setPlace ] = useState("서울역");
  const searchRef = useRef();

  useEffect(() => { 
    setPage(true);
    return () => {setPage(false)} 
  }, [])

  const handleBackClick = () => {
    navigate(-1);
  }
  const handleSearchClick = (e) => {
    setPlace(searchRef.current.value);
  }

  const handleAlignClick = () => {
    setAlign(!align)
  }

  const tmpArr = [
    { id:1, title:"갤러리", subtitle:"청담 아트불 갤러리 1부", contents:"아트불 청담갤러리 기획전", date:"2023.05.24", path:"logo.png", url:"https://mever.me/art1", price:1276800000 },
    { id:2, title:"갤러리", subtitle:"청담 아트불 갤러리 2부", contents:"블루칩 작가와의 로맨스ㅇㅇ", date:"2023.05.24", path:"logo.png", url:"https://mever.me/art2", price:3975442000 },
    { id:3, title:"갤러리", subtitle:"남산 갤러리", contents:"김미영 작가 개인전", date:"2023.05.30", path:"logo.png", url:"https://mever.me/art3", price:703254000 },
    { id:4, title:"미공개 타이틀", subtitle:"공개 예정", contents:"COMING SOON", date:"미정", path:"logo.png", url:"" },
    { id:5, title:"미공개 타이틀", subtitle:"공개 예정", contents:"COMING SOON", date:"미정", path:"logo.png", url:"" },
  ]

  return (
    <>
    <div className={`search-container flex-column-start ${page && 'show'}`}>

      <div className="search-box flex-row-sb">
        <LeftOutlined onClick={ handleBackClick }/>
        <input type="text" placeholder="검색어를 입력해주세요" ref={searchRef}/>
        <SearchOutlined onClick={handleSearchClick}/>
      </div>

      <div className="search-header">
        <div className="search-tag-wrapper">
          <ul className="search-tag">
            <li>ALL</li>
            <li>#내돈내산</li>
            <li>#주변맛집</li>
            <li>#병원</li>
            <li>#마트</li>
            <li>#내돈내산</li>
            <li>#주변맛집</li>
            <li>#병원</li>
            <li>#마트</li>
          </ul>
        </div>
      </div>

      <div className="list-container flex-row-center">
        { align ?  <SearchList data={tmpArr}/> : <KakaoMap place={place}/> }
        { align ? <EnvironmentFilled onClick={handleAlignClick}/> : <DatabaseFilled onClick={handleAlignClick}/> }
      </div>
    </div>
    </>
  )
}

export default Search
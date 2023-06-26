
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageState, alertState } from "../recoil/state";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reference = () => {

  const [pageInfo, setPageInfo] = useRecoilState(pageState);
	const toastAlert = useSetRecoilState(alertState);
  const navigate = useNavigate();

  //이미지를 로드하고, 없으면 기본이미지로 대체
  const getImageUrl = (imageName) => {
    try {
      return require(`../asset/images/reference/${imageName}.png`);
    } catch (error) {
      console.error(error);
      return `/bluechip/images/logo.png`;
    }
  };

  useEffect(() => { setPageInfo({...pageInfo, title:"레퍼런스"})}, []);

  const tmbArr = [
    { id:1, title:"갤러리", subtitle:"청담 아트불 갤러리 1부", contents:"아트불 청담갤러리 기획전", date:"2023.05.24", path:"logo.png", url:"https://mever.me/art1", price:1276800000 },
    { id:2, title:"갤러리", subtitle:"청담 아트불 갤러리 2부", contents:"블루칩 작가와의 로맨스ㅇㅇ", date:"2023.05.24", path:"logo.png", url:"https://mever.me/art2", price:3975442000 },
    { id:3, title:"갤러리", subtitle:"남산 갤러리", contents:"김미영 작가 개인전", date:"2023.05.30", path:"logo.png", url:"https://mever.me/art3", price:703254000 },
    { id:4, title:"미공개 타이틀", subtitle:"공개 예정", contents:"COMING SOON", date:"미정", path:"logo.png", url:"" },
    { id:5, title:"미공개 타이틀", subtitle:"공개 예정", contents:"COMING SOON", date:"미정", path:"logo.png", url:"" },
  ]
  return (
    <div className="list-container">

    {
      
      tmbArr.map((v,i) => {
        return (
          <>
          <div className='card-container' 
          key={i} style={{
            backgroundImage:`url(${getImageUrl(i+1)})`, 
            backgroundSize:`300%`,
            backgroundPosition:`right center`,
            backgroundRepeat:"no-repeat"
          }}
          onClick={ () => { 
            setPageInfo({...pageState, info:v});
            if(v.date === "미정"){
              toastAlert({msg:"준비중입니다"})
            } else { 
              navigate("/detail");
            }
           }}
          >	
            <div className="card-cover"></div>
             <div className="card-index">BLUECHIP NO.{v.id}</div>
            
            <div className="card-title">{v.title}</div>
            <div className="card-subtitle">{v.subtitle}</div>
            <div className="card-contents">{v.contents}</div>
            <div className="card-date">{v.date}</div>
          </div>
          </>
        )
      })
    }
    </div>
  )
}

export default Reference;
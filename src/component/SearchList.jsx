
const SearchList = ({data}) => {
  return (
    <>
    {
      data.map((v,i) => {
        return (
          <>
          <div className='card-container' key={i}>	
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
   </>
  )
}

export default SearchList
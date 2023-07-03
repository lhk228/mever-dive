import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';


const KakaoMap = ({place}) => {

  const locations = [
		{ title: '카카오', latlng: { lat: 33.450705, lng: 126.570677 } },
		{ title: '생태연못', latlng: { lat: 33.450936, lng: 126.569477 } },
		{ title: '텃밭', latlng: { lat: 33.450879, lng: 126.56994 } },
		{ title: '근린공원', latlng: { lat: 33.451393, lng: 126.570738 } },
	];

	const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  })
	const [info, setInfo] = useState()
	const [map, setMap] = useState();
	const [markers, setMarkers] = useState([]);
	const { kakao } = window;

	useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(place, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })
  }, [map, place])
	
  return (
    <Map 
    center={state.center}
		isPanto={state.isPanto}
    style={{ width: '100%', height: '100%' }} // 지도 크기
    level={3}                                   // 지도 확대 레벨
		draggable={true}
		onCreate={setMap}
    >

		{markers.map((marker) => (
			<MapMarker
				key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
				position={marker.position}
				onClick={() => setInfo(marker)}
			>
				{info &&info.content === marker.content && (
					<div className="marker-overlay">{marker.content}</div>
				)}
			</MapMarker>
		))
		}
		</Map>
	)
}

export default KakaoMap
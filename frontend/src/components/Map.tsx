import { useEffect } from "react";

import img1 from '../assets/wedding.png'
import img2 from '../assets/parking.png'

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = () => {
  const APIKEY = import.meta.env.VITE_APP_KAKAO_MAP_KEY
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APIKEY}&autoload=false`;
    document.head.appendChild(script)

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map")
        const options = {
          center: new window.kakao.maps.LatLng(36.3892362, 127.3064746), // 초기 중심 좌표 (위도, 경도)
          level: 2, // 지도 확대 레벨
        }
        
        const map = new window.kakao.maps.Map(container, options)

        const locations = [
          [36.3892362, 127.3064746],
          [36.3889768, 127.3070515],
        ]

        const imgs = [
          img1,
          img2
        ]

        locations.map((e, i) => {
          const imgSize = new window.kakao.maps.Size(32, 43)
          const imgOption = { offset: new window.kakao.maps.Point( 20, 43 )}

          const markerPosition = new window.kakao.maps.LatLng(e[0], e[1])
          const markerImage = new window.kakao.maps.MarkerImage(imgs[i], imgSize, imgOption)
          
          new window.kakao.maps.Marker({ map, position: markerPosition, image: markerImage })
        })

        map.setZoomable(false)
        map.setDraggable(false)
      })
    })
  }, [])

  return (
    <>
      <div id="map" className="w-full h-full" />
    </>
  )
}

export default MapBox;
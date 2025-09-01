import { useEffect } from "react";

function KakaoMapScriptLoader() {
  useEffect(() => {
    if (document.getElementById("kakao-map-script")) return;
    const script = document.createElement("script");
    script.id = "kakao-map-script";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_APP_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);
  }, []);
  return null;
}


export default KakaoMapScriptLoader;

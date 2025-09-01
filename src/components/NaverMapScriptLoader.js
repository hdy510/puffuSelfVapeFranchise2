import { useEffect } from "react";

function NaverMapScriptLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      console.log("✅ Naver Maps script loaded!");
    };
    document.head.appendChild(script);
  }, []);

  return null;
}

export default NaverMapScriptLoader;

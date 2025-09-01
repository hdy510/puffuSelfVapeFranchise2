import { useEffect, useRef, useState } from "react";
import { useResponsive } from "../utils/useResponsive";
import styles from "./Section15.module.scss";
import daeheung from "../resources/daeheung.png";
import jeonjujeonbukdae from "../resources/jeonjujeonbukdae.png";
import mapAddress1 from "../resources/mapAddress1.png";
import mapAddress2 from "../resources/mapAddress2.png";
import mapPostalCode from "../resources/mapPostalCode.png";
import mapPhone from "../resources/mapPhone.png";

const stores = [
  {
    img: daeheung,
    name: "대흥직영점",
    address1: "대전 중구 대종로 487 1층",
    address2: "대전 중구 대흥동 198-1",
    lat: 36.32785,
    lng: 127.42614,
    postalCode: "34914",
    tel: "0507-1445-2143",
  },
  {
    img: jeonjujeonbukdae,
    name: "전주전북대점",
    address1: "전북 전주시 덕진구 명륜4길 12 102호",
    address2: "전북 전주시 덕진구 덕진동1가 1263-3",
    lat: 35.84296,
    lng: 127.12681,
    postalCode: "54898",
    tel: "0507-1334-2193",
  },
];

function Section15() {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const interval = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(interval);
        window.kakao.maps.load(() => {
          const center = new window.kakao.maps.LatLng(36.3275, 127.4275);
          const mapInstance = new window.kakao.maps.Map(mapRef.current, {
            center,
            level: 4,
          });
          setMap(mapInstance);

          // 마커 생성
          stores.forEach((store) => {
            new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(store.lat, store.lng),
              map: mapInstance,
              title: store.name,
            });
          });
        });
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  // 특정 매장 포커싱
  const focusStore = (index) => {
    if (!map || !window.kakao || !window.kakao.maps) {
      console.warn("⚠️ Kakao Maps is not ready yet");
      return;
    }
    const store = stores[index];
    const position = new window.kakao.maps.LatLng(store.lat, store.lng);
    map.setCenter(position);
    map.setLevel(3); // 더 확대
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>실제 운영중인 매장을 지도에서 찾아보세요</h2>
        </div>
        <div className={styles.contentsWrap}>
          <div
            className={styles.storeList}
            style={{
              padding: isTabletAndDesktop
                ? stores.length >= 3
                  ? "1.5rem 1rem 1.5rem 1.5rem"
                  : "1.5rem"
                : stores.length >= 2
                ? "1rem 0.5rem 1rem 1rem"
                : "1rem",
            }}
          >
            <div className={styles.scrollWrap}>
              {stores.map((store, idx) => (
                <div
                  key={idx}
                  className={styles.storeBox}
                  style={{
                    borderBottom:
                      idx === stores.length - 1
                        ? "none"
                        : "0.063rem solid #E5E5E5",
                    paddingTop: idx === 0 ? "0" : "1rem",
                    paddingBottom:
                      idx === stores.length - 1 ? "0" : "1rem",
                  }}
                  onClick={() => focusStore(idx)}
                >
                  <img
                    src={store.img}
                    alt="매장 이미지"
                    className={styles.storeImg}
                  />
                  <div className={styles.storeInfoBox}>
                    <h4 className={styles.heading4}>{store.name}</h4>
                    <div className={styles.storeInfoDetail}>
                      <img src={mapAddress1} alt="도로명" />
                      <p>{store.address1}</p>
                    </div>
                    <div className={styles.storeInfoDetail}>
                      <img src={mapAddress2} alt="지번" />
                      <p>{store.address2}</p>
                    </div>
                    <div className={styles.storeInfoDetail}>
                      <img src={mapPostalCode} alt="우편번호" />
                      <p>{store.postalCode}</p>
                    </div>
                    <div className={styles.storeInfoDetail}>
                      <img src={mapPhone} alt="전화번호" />
                      <p>{store.tel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={mapRef} className={styles.map} />
        </div>
      </div>
    </div>
  );
}

export default Section15;

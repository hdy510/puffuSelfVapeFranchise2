import { useState, useEffect } from "react";
import styles from "./Section7.module.scss";
import checkIcon from "../resources/checkIcon.png";
import monitoringImg01 from "../resources/monitoringImg01.png";
import monitoringImg02 from "../resources/monitoringImg02.png";
import kioskImg from "../resources/kioskImg.png";
import kioskDemo from "../resources/kioskDemo.png";
import dimmed from "../resources/dimmed.png";
import moreCircleIcon from "../resources/moreCircleIcon.png";
import appCustomer1 from "../resources/appCustomer1.png";
import appCustomer2 from "../resources/appCustomer2.png";
import appVendor from "../resources/appVendor.png";
import downloadGooglePlay from "../resources/downloadGooglePlay.png";
import downloadAppStore from "../resources/downloadAppStore.png";
import downloadGalaxystore from "../resources/downloadGalaxystore.png";
import downloadOnestore from "../resources/downloadOnestore.png";
import closeBtn from "../resources/closeBtn.png";


function Section7 () {
  // 24시 본사 관제 이미지
  const MonitoringFade = () => {
    const [active, setActive] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActive((prev) => (prev === 0 ? 1 : 0));
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={styles.monitoringImgBoxWrap}>
        <div className={styles.monitoringImgBox}>
          <img
            src={monitoringImg01}
            alt="24시 본사 관제 이미지1"
            className={`${styles.fadeImg} ${active === 0 ? styles.show : ""}`}
          />
          <img
            src={monitoringImg02}
            alt="24시 본사 관제 이미지2"
            className={`${styles.fadeImg} ${active === 1 ? styles.show : ""}`}
          />
        </div>
      </div>
    );
  }
  

  const tabs = [
    {
      key: "smartPhone",
      label: "스마트폰",
      title: <>무인 운영의 핵심 기능을<br/>스마트폰 하나로 처리</>,
      list: [
        "QR 결제",
        "PASS, SMS 성인인증",
        "매장관리",
        "선주문 및 빠른 픽업",
      ],
      rightBox: <div className={styles.smartPhoneImgBox}>
       <div className={styles.appBox}>
        <div className={styles.appTitleBox}>
          <img src={appCustomer1} alt="고객용 앱 아이콘1" className={styles.appIcon} />
          <img src={appCustomer2} alt="고객용 앱 아이콘1" className={styles.appIcon} />
          <p className={styles.appTitleTxt}>고객용 앱</p>
        </div>
        <div className={styles.appDownloadBox}>
          <img src={downloadGooglePlay} alt="구글플레이에서 다운로드하기 버튼" className={styles.downloadLink}
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.androidpu.muinPu&hl=ko", "_blank")}
          />
          <img src={downloadAppStore} alt="앱스토어에서 다운로드하기 버튼" className={styles.downloadLink}
            onClick={() => window.open("https://apps.apple.com/kr/app/puffu/id6504068927", "_blank")}
          />
          <img src={moreCircleIcon} alt="더보기 버튼" className={styles.moreCircleIcon}
            onClick={() => setModalOpen(true)}
          />
        </div>
       </div>
       <div className={styles.appBox}>
        <div className={styles.appTitleBox}>
            <img src={appVendor} alt="점주용 앱 아이콘" className={styles.appIcon} />
            <p className={styles.appTitleTxt}>점주용 앱</p>
          </div>
          <div className={styles.appDownloadBox}>
            <img src={downloadAppStore} alt="앱스토어에서 다운로드하기 버튼" className={styles.downloadLink}
              onClick={() => window.open("https://apps.apple.com/kr/app/puffu-%EC%82%AC%EC%9E%A5%EB%8B%98/id6749678115", "_blank")}
            />
          </div>
          <p className={styles.appBoxSubTxt}>안드로이드 기종 점주에게는 별도의 다운로드 링크를 통해 앱을 제공해드립니다</p>
       </div>
      </div>
    },
    {
      key: "kiosk",
      label: "키오스크",
      title: <>자체 개발 키오스크로<br/>쉽고 간단하게 쇼핑</>,
      list: [
        "인건비 ZERO, 편의성 UP!",
        "직관적이고 편리한 UI 디자인 제공",
        "카드결제와 QR 결제 방식 제공",
        "인기, 이벤트, 브랜드 상품 모아보기",
      ],
      rightBox: <div className={styles.kioskImgBox}>
        <img src={kioskImg} alt="키오스크 화면 이미지" className={styles.kioskImg} />
        <img src={dimmed} alt="키오스크 화면 이미지" className={styles.dimmed} />
        <img src={kioskDemo} alt="키오스크 보러가기" className={styles.kioskDemo}
        onClick={() => window.open("https://puffuapp.com/demo", "_blank")}
        />
      </div>
    },
    {
      key: "monitoring",
      label: "24시 본사 관제",
      title: <>점주님의 손을 덜어주는 <br/>본사의 24시간 실시간 관제</>,
      list: [
        "본사에서 24시간 매장 관제",
        "문제 상황 발생 시 즉각 대응",
        "자동 발주",
      ],
      rightBox: <MonitoringFade />
    },
  ];
  const [ tab, setTab ] = useState("smartPhone");
  const activeTab = tabs.find((t) => t.key === tab);
  const [ modalOpen, setModalOpen ] = useState(false);





  function TabContent({ title, list, rightBox }) {
    return (
      <>
        <h3 className={styles.tabContentTitle}>{title}</h3>
        <div className={styles.tabContentSection}>
          <div className={styles.leftBox}>
            <ul className={styles.tabContentItemBox}>
              {list.map((content, index) => (
                <li className={styles.tabContentItem} key={`tabItem_${index}`}>
                  <img src={checkIcon} alt="체크 아이콘" className={styles.checkIcon} />
                  <p className={styles.tabContentItemTxt}>{content}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightBox}>{rightBox}</div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            매장 운영은 더 <span className={styles.orangeText}>똑똑</span>하고{" "}
            <span className={styles.orangeText}>간편</span>하게
          </h2>
          <p className={styles.subTitle}>
            점주의 수고는 줄이고, 운영의 효율을 높이는 시스템 제공
          </p>
        </div>

        <div>
          <ul className={styles.tabBox}>
            {tabs.map(({ key, label }) => (
              <li
                key={key}
                className={`${styles.tabMenu} ${
                  tab === key ? styles.active : ""
                }`}
                onClick={() => setTab(key)}
              >
                {label}
              </li>
            ))}
          </ul>

          <div className={styles.tabContentBox}>
            <TabContent title={activeTab.title} list={activeTab.list} rightBox={activeTab.rightBox} />
          </div>
        </div>
      </div>

      <div className={`${styles.modalScreen} ${modalOpen ? styles.open : ""}`} onClick={() => setModalOpen(false)}>
        <div className={`${styles.modalBox} ${modalOpen ? styles.open : ""}`} onClick={(e) => e.stopPropagation()}>
          <img src={closeBtn} alt="닫기 버튼" className={styles.closeBtn}
            onClick={() => setModalOpen(false)}
          />
          <div className={styles.iconWrap}>
            <img src={appCustomer1} alt="고객용 앱 아이콘" />
            <img src={appCustomer2} alt="고객용 앱 아이콘" />
          </div>
          <p className={styles.modalTitle}>고객용 앱</p>
          <div className={styles.modalImgBox}>
            <img src={downloadGooglePlay} alt="구글플레이에서 다운로드하기 버튼" 
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.androidpu.muinPu&hl=ko", "_blank")}
            />
            <img src={downloadAppStore} alt="앱 스토어에서 다운로드하기 버튼" 
              onClick={() => window.open("https://apps.apple.com/kr/app/puffu/id6504068927", "_blank")}
            />
            <img src={downloadOnestore} alt="원스토어에서 다운로드하기 버튼" style={{ paddingTop: "0.1rem" }} 
              onClick={() => window.open("https://m.onestore.co.kr/v2/ko-kr/app/0000779461", "_blank")}
            />
            <img src={downloadGalaxystore} alt="갤럭시스토어에서 다운로드하기 버튼" style={{ paddingTop: "0.1rem" }} 
              onClick={() => window.open("https://galaxystore.samsung.com/detail/com.puffu.puffupayment", "_blank")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7;

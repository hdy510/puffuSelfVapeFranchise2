import { forwardRef, useState, useRef } from "react";
import styles from "./Section4.module.scss";
import animations from "./titleAnimation.module.scss";
import puffu from "../resources/puffu.png";
import merit01a from "../resources/merit01a.png";
import merit01b from "../resources/merit01b.png";
import merit02a from "../resources/merit02a.png";
import merit02b from "../resources/merit02b.png";
import merit03a from "../resources/merit03a.png";
import merit03b from "../resources/merit03b.png";
import merit03c from "../resources/merit03c.png";
import merit04a from "../resources/merit04a.png";
import merit04b from "../resources/merit04b.png";
import merit04c from "../resources/merit04c.png";
import merit05a from "../resources/merit05a.png";
import merit05b from "../resources/merit05b.png";
import meritMobile01a from "../resources/meritMobile01a.png";
import meritMobile01b from "../resources/meritMobile01b.png";
import meritMobile02a from "../resources/meritMobile02a.png";
import meritMobile02b from "../resources/meritMobile02b.png";
import meritMobile03a from "../resources/meritMobile03a.png";
import meritMobile03b from "../resources/meritMobile03b.png";
import meritMobile03c from "../resources/meritMobile03c.png";
import meritMobile04a from "../resources/meritMobile04a.png";
import meritMobile04b from "../resources/meritMobile04b.png";
import meritMobile04c from "../resources/meritMobile04c.png";
import meritMobile05a from "../resources/meritMobile05a.png";
import meritMobile05b from "../resources/meritMobile05b.png";
import smileWhite from "../resources/smileWhite.png";

import { useScrollFadeIn } from "../utils/useScrollFadeIn";
import { useResponsive } from "../utils/useResponsive";

const Section4 = forwardRef((props, ref) => {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const { ref: wrapRef, isVisible: isWrapVisible } = useScrollFadeIn({ threshold: 0.3 });
  const meritCard = [
    {
      id: "01",
      title: "공장 직연결 공급망",
      sub: "전자담배 생산 본사에서 고품질의 다양한 제품을 안정적으로 공급하고, 시장 변화에 빠르게 대응할 수 있습니다",
      contents: (
        <div className={styles.detailBox}>
          <div className={styles.detailSubBox}>
            <p className={styles.roundTitle}>타사</p>
            <img src={isMobile ? meritMobile01a : merit01a} alt="공장에서 도매처를 점주에게 공급" className={styles.detailImg} />
          </div>
          <div className={styles.detailSubBox}>
            <p className={`${styles.roundTitle} ${styles.orange}`}>
              푸푸
              <img src={smileWhite} alt="푸푸 스마일 로고" className={styles.smileImg} />
            </p>
            <img src={isMobile ? meritMobile01b : merit01b} alt="공장에서 점주에게 직접 공급" className={styles.detailImg} />
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "무재고 위탁판매",
      sub: "사입 부담 없이 필요한 수량만 공급받아 불필요한 재고 부담을 줄일 수 있습니다",
      contents: 
        <div className={styles.detailBox}>
          <div className={styles.detailSubBox}>
            <p className={styles.roundTitle}>사입(일반매입)</p>
            <img src={isMobile ? meritMobile02a : merit02a } alt="점주가 직접 재고를 사입해야 하므로 초기 투자금이 크고, 팔리지 않는 재고 부담이 발생" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>점주가 직접 재고를 사입해야 하므로<br/>
            초기 투자금이 크고, 팔리지 않는 재고 부담이 발생</p> */}
          </div>
          <div className={styles.detailSubBox}>
            <p className={`${styles.roundTitle} ${styles.orange}`}>위탁판매</p>
            <img src={isMobile ? meritMobile02b : merit02b} alt="본사가 재고를 보유하고 공급하기 때문에 점주는 매장을 채우는 것만으로 운영 가능" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>본사가 재고를 보유하고 공급하기 때문에<br/>
            점주는 매장을 채우는 것만으로 운영 가능</p> */}
          </div>
        </div>
    },
    {
      id: "03",
      title: "KC 인증 자판기",
      sub: "국가 공식 KC 인증을 받은 자판기를 사용해 안전성과 신뢰성을 갖추고 있습니다",
      contents: 
        <div className={styles.detailBox}>
          <div className={styles.detailSubBox}>
            <img src={isMobile ? meritMobile03a : merit03a} alt="KC 인증으로 안정성 검증" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>KC 인증으로 안정성 검증</p> */}
          </div>
          <div className={styles.detailSubBox}>
            <img src={isMobile ? meritMobile03b : merit03b} alt="화재·감전 등 안전사고 예방 설계 " className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>화재·감전 등 안전사고 예방 설계</p> */}
          </div>
          <div className={styles.detailSubBox}>
            <img src={isMobile ? meritMobile03c: merit03c} alt="장시간 사용 가능한 내구성" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>장시간 사용 가능한 내구성</p> */}
          </div>
        </div>
    },
    {
      id: "04",
      title: "자체 운영 시스템",
      sub: "다양한 전문가들이 모여 개발한 키오스크, 어플을 통해 더욱 효율적이고 체계적인 매장 운영을 가능하게 합니다",
      contents: 
        <div className={styles.detailBox}>
          <div className={styles.detailSubBox}>
            <p className={`${styles.roundTitle} ${styles.orange}`}>키오스크</p>
            <img src={isMobile ? meritMobile04a: merit04a} alt="직관적인 UI/UX로 누구나 쉽게 이용 가능" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>직관적인 UI/UX로<br/>
            누구나 쉽게 이용 가능</p> */}
          </div>
          <div className={styles.detailSubBox}>
            <p className={`${styles.roundTitle} ${styles.orange}`}>점주 앱</p>
            <img src={isMobile ? meritMobile04b: merit04b} alt="매출·매장관리·CCTV·IoT 관리" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>매출·매장관리·CCTV·<br/>
            IoT 관리</p> */}
          </div>
          <div className={styles.detailSubBox}>
            <p className={`${styles.roundTitle} ${styles.orange}`}>고객용 앱</p>
            <img src={isMobile ? meritMobile04c: merit04c} alt="본인인증, QR 결제, 선주문" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>본인인증, QR 결제,<br/>
            선주문</p> */}
          </div>
        </div>
    },
    {
      id: "05",
      title: "미성년자 차단문",
      sub: "매장에 유리로 된 중문을 설치해 미성년자 출입 문제를 원천 차단합니다",
      contents: 
        <div className={styles.detailBox}>
          <div className={styles.detailSubBox}>
            <img src={isMobile ? meritMobile05a: merit05a} alt="누구나 둘러볼 수 있는 대기실" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>누구나 둘러볼 수 있는 대기실</p> */}
          </div>
          <div className={styles.detailSubBox}>
            <img src={isMobile ? meritMobile05b: merit05b} alt="상품 구매는 성인인증 후 차단문 열고 입장" className={styles.detailImg} />
            {/* <p className={styles.detailDescription}>상품 구매는 성인인증 후<br/>
            차단문 열고 입장</p> */}
          </div>
        </div>
    },
  ]

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div className={styles.container} ref={ref}>
      <div ref={wrapRef} className={`${styles.wrap} ${animations.fadeInUp} ${isWrapVisible ? animations.show : ""} `}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>성공적인 창업으로 이끄는</h2>
          <div className={styles.titleSeconRow}>
            <img src={puffu} alt="PUFFU" className={styles.puffuImg} />
            <p className={styles.titleSeconRowTxt}>만의 메리트</p>
          </div>
        </div>
        <ul className={styles.meritsBox}>
          {meritCard.map((item, index) => (
            <li
              key={index}
              className={`${styles.meritsEach} ${styles["index" + index]}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className={styles.hoverBg}
                style={{
                  opacity: openIndex === index ? 1 : 0,
                  transition: "opacity 0.5s ease"
                }}
              />
              <span className={styles.meritsId}>{item.id}</span>
              <p className={styles.meritsTitle}>{item.title}</p>
              <p className={styles.meritsSubTitle}>{item.sub}</p>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={styles.hoverContents}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "max-height 0.5s ease, opacity 0.5s ease",
                }}
              >
                {item.contents}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Section4;

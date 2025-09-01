import { forwardRef } from "react";
import { useResponsive } from "../utils/useResponsive";
import { useScrollFadeIn } from "../utils/useScrollFadeIn";
import styles from "./Section2.module.scss";
import animations from "./titleAnimation.module.scss";
import circleGray from "../resources/circleGray.png";
import circleOrange from "../resources/circleOrange.png";
import rightGrayArrow from "../resources/rightGrayArrow.png";
import coinIcon from "../resources/coinIcon.png";
import shopIcon from "../resources/shopIcon.png";
import marketGraph1 from "../resources/marketGraph1.png";
import marketGraph2 from "../resources/marketGraph2.png";

const Section2 = forwardRef((props, ref) => {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const { ref: part1Ref, isVisible: isPart1Visible } = useScrollFadeIn({ threshold: 0.3 });
  const { ref: part2Ref, isVisible: isPart2Visible } = useScrollFadeIn({ threshold: 0.3 });
  const { ref: part3Ref, isVisible: isPart3Visible } = useScrollFadeIn({ threshold: 0.3 });

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrap}>
        <div ref={part1Ref} className={`${styles.part1} ${animations.fadeInUp} ${isPart1Visible ? animations.show : ""} `}>
          <div className={`${styles.titleBox}`}>
            <h1 
            className={`${styles.title} ${styles.heading1}`}>커지는 <span className={styles.orangeText}>전자담배</span> 시장!<br />
            폭발하는 <span className={styles.orangeText}>무인매장</span> 수요!
            </h1>
            {isTabletAndDesktop ? (
              <p className={`${styles.subTitle} ${styles.heading1Sub}`}>전자담배와 무인매장, 두 상승 곡선이 만나는 지금! 기회를 선점하세요</p>
            ) : (
              <p className={`${styles.subTitle} ${styles.heading1Sub}`}>전자담배와 무인매장, 두 상승 곡선이 만나는 지금!<br/> 기회를 선점하세요</p>
            )}
          </div>
          <div className={styles.cardBox}>
            <div className={styles.leftBox}>
              <div className={styles.cardBoxTitle}>
                <img src={coinIcon} alt="돈이 쌓여있는 아이콘" className={styles.coinIcon} />
                <p>전자담배 시장 규모</p>
              </div>
              <div className={styles.cardBoxImage}>
                <img src={marketGraph1} alt="2018년 96억원에서 2023년 353억원" />
              </div>
              <p className={styles.cardBoxReference}>(출처: PSMarketResearch, <br/>Grand View Research)</p>
            </div>
            <div className={styles.rightBox}>
              <div className={styles.cardBoxTitle}>
                <img src={shopIcon} alt="가게 아이콘" className={styles.shopIcon} />
                <p>무인매장 신규 가맹</p>
              </div>
              <div className={styles.cardBoxImage}>
                <img src={marketGraph2} alt="2019년에서 2023년 무려 894% 증가" />
              </div>
              <p className={styles.cardBoxReference}>(출처: 신한카드 빅데이터연구소)</p>
            </div>
          </div>
          <div className={styles.centerBox}>
            <p className={styles.centerBoxTxt}><span className={styles.bigTxt}>2024년 상반기</span> 기준, </p>
            <p className={styles.centerBoxTxt}>서울시 내 무인 전자담배 <span className={styles.bigTxt}>판매점 수</span>가 </p>
            <p className={`${styles.centerBoxTxt} ${styles.last}`}>반년만에 <span className={styles.biggestTxt}>4배</span> 로 급증!</p>
            <p className={styles.centerBoxReference}>(출처: 서울시 실태조사)</p>
          </div>
        </div>

        <div ref={part2Ref} className={`${styles.part2} ${animations.fadeInUp} ${isPart2Visible ? animations.show : ""} `}>
          <div className={styles.titleBox}>
            <h2 className={styles.title}><span className={styles.orangeText}>고마진</span> 창업 아이템!</h2>
            <p className={styles.subTitle}>푸푸 전자담배는 도매가 대비 약 2.7배의 소비자가가 적용되는 고마진 창업 아이템입니다</p>
          </div>
          <div className={styles.circleBox}>
            <div className={styles.leftCircleBox}>
              <div className={styles.leftCircleBoxWrap}>
                <img src={circleGray} alt="일반 소매업 평균은 1.5배 마진" />
                <span className={styles.leftCircleBoxNum}>1.5배</span>
              </div>
              <p className={styles.circleBoxLabel}>일반 소매업 평균</p>
            </div>
            <div className={styles.rightCircleBox}>
              <div className={styles.rightCircleBoxWrap}>
                <img src={circleOrange} alt="푸푸는 2.7배 마진" className={styles.expandCircle2} />
                <img src={circleOrange} alt="푸푸는 2.7배 마진" className={styles.expandCircle1} />
                <img src={circleOrange} alt="푸푸는 2.7배 마진" />
                <span className={styles.rightCircleBoxNum}>2.7배</span>
              </div>
              <p className={styles.circleBoxLabel}>푸푸 전자담배</p>
            </div>
          </div>
        </div>

        <div ref={part3Ref} className={`${styles.part3} ${animations.fadeInUp} ${isPart3Visible ? animations.show : ""}`}>
          <div className={styles.titleBox}>
            {isTabletAndDesktop ? (
              <h3 className={styles.title}>고마진 아이템과 무인 시스템 운영으로<br/>
              <span className={styles.orangeText}>고마진 저관리</span> 창업 모델 실현</h3>
            ) : (
              <h3 className={styles.title}>고마진 아이템과<br/> 무인 시스템 운영으로<br/>
              <span className={styles.orangeText}>고마진 저관리</span> 창업 모델 실현</h3>
            )}
          </div>
          <div className={styles.arrowBox}>
            <div className={styles.arrowBoxSubBox}>
              <span className={styles.arrowBoxWhiteTxt}>무인 시스템</span>
              <div className={styles.arrowBundle}>
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
              </div>
              <span className={styles.arrowBoxWhiteGradientTxt}>관리 용이</span>
            </div>
            <div className={styles.arrowBoxSubBox}>
              <span className={styles.arrowBoxWhiteTxt}>고마진 아이템</span>
              <div className={styles.arrowBundle}>
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
                <img src={rightGrayArrow} alt="오른쪽 화살표 아이콘" />
              </div>
              <span className={styles.arrowBoxWhiteGradientTxt}>높은 수익</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Section2;
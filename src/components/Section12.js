import styles from "./Section12.module.scss";
import limitedBenefit from "../resources/limitedBenefit.png";
import priceCard from "../resources/priceCard.png";
import { useResponsive } from "../utils/useResponsive";
import { useScrollFadeIn } from "../utils/useScrollFadeIn";
import animations from "./titleAnimation.module.scss";


function Section12 () {
  const { ref: wrapRef, isVisible: isWrapVisible } = useScrollFadeIn({ threshold: 0.3 });
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const exampleList = [
    { margin: "40만원", support: "+160만원", finalProfit: "200만원" },
    { margin: "100만원", support: "+100만원", finalProfit: "200만원" },
    { margin: "0원", support: "+200만원", finalProfit: "200만원" },
  ] 

  return (
    <div className={styles.container}>
      <div ref={wrapRef} className={`${styles.wrap} ${animations.fadeInUp} ${isWrapVisible ? animations.show : ""}`}>
        <img src={limitedBenefit} alt="한정혜택" className={styles.limitedBenefit} />
        <div className={styles.titleBox}>
          <p className={styles.titleTxt}>월 최대</p>
          <img src={priceCard} alt="200만원" className={styles.priceCard} />
          <p className={styles.titleTxt}>까지 지원!</p>
        </div>
        <p className={styles.subTxt}>월 매출에서 공급가와 수수료를 뺀{(isMobile || isLargeMobile) && <br/>} 점주 마진이 200만원 보다 적을 경우<br/>
        본사가 부족한 금액을 지원해드립니다</p>
        <figure className={styles.diagramBox}>
          <div className={styles.diagramTitle}>
            <div className={styles.diagramTitleTxt}>월 점주 마진</div>
            <div className={styles.diagramTitleTxt}>본사 지원</div>
            <div className={styles.diagramTitleTxt}>최종 점주 수익</div>
          </div>
          <ul className={styles.firstUl}>
            {exampleList.map((item, index) => (
              <li className={styles.firstLi} key={`list_${index}`}>
                <ul className={styles.secondUl}>
                  <li className={styles.secondLi1}>{item.margin}</li>
                  <li className={styles.secondLi2}>{item.support}</li>
                  <li className={styles.secondLi3}>{item.finalProfit}</li>
                </ul>
              </li>
            ))}
          </ul>
        </figure>
        <p className={styles.ps}>*적용 기간은 본사와 협의해서 결정됩니다</p>
      </div>
    </div>
  )
}

export default Section12;
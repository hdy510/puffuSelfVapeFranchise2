import styles from "./Section11.module.scss";
import smile from "../resources/smile.png";
import chart1 from "../resources/chart1.png";
import chart2 from "../resources/chart2.png";
import chart3 from "../resources/chart3.png";
import chart4 from "../resources/chart4.png";
import chart5 from "../resources/chart5.png";


function Section11 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            <span className={styles.orangeText}>높은 마진율</span>, 안정적인 수익구조
          </h2>
          <p className={styles.subTitle}>
          매출 대비 고정비 비율을 고려한 안정적인 마진 구조
          </p>
        </div>
        <div className={styles.diagramBox}>
          <img src={smile} alt="푸푸 로고" className={styles.smile} />
          <div className={styles.diagramImgBox}>
            <img src={chart1} alt="도너츠 차트 - 순수익" className={styles.chart1} />
            <img src={chart2} alt="도너츠 차트 - 잡비" className={styles.chart2} />
            <img src={chart3} alt="도너츠 차트 - 카드수수료" className={styles.chart3} />
            <img src={chart4} alt="도너츠 차트 - 임대료" className={styles.chart4} />
            <img src={chart5} alt="도너츠 차트 - 판매량에 따른 제품 공급가" className={styles.chart5} />
          </div>
          <div className={styles.diagramTxtBoxWrap}>
            <div className={`${styles.diagramTxtBox} ${styles.index0}`}>
              <p className={styles.diagramKeyBig}>순수익</p>
              <p className={styles.diagramValueBig}>약 <span className={styles.bigTxt}>34%</span></p>
            </div>
            <div className={`${styles.diagramTxtBox} ${styles.index1}`}>
              <p className={styles.diagramKey}>잡비</p>
              <p className={styles.diagramValue}>3%</p>
            </div>
            <div className={`${styles.diagramTxtBox} ${styles.index2}`}>
              <p className={styles.diagramKey}>카드수수료</p>
              <p className={styles.diagramValue}>3%</p>
            </div>
            <div className={`${styles.diagramTxtBox} ${styles.index3}`}>
              <p className={styles.diagramKey}>임대료</p>
              <p className={styles.diagramValue}>10%</p>
            </div>
            <div className={`${styles.diagramTxtBox} ${styles.index4}`}>
              <p className={styles.diagramKey}>판매량에 따른 제품 공급가</p>
              <p className={styles.diagramValue}>50%</p>
            </div>
          </div>
          <p className={styles.diagramSubTxt}>*각 매장별 상황에 따라 비율은 달라질 수 있습니다</p>
        </div>
      </div>
    </div>
  )
}

export default Section11;
import { forwardRef } from "react";
import styles from "./Section10.module.scss";
import packageBasic from "../resources/packageBasic.png";
import packageAllInOne from "../resources/packageAllInOne.png";
import orangeLine from "../resources/orangeLine.png";
import puffuWhite from "../resources/puffuWhite.png";
import { useResponsive } from "../utils/useResponsive";


const Section10 = forwardRef((props, ref) => {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();

  const serviceCostList = [
    { service: "무인세탁소", startUpCost: "4,500만원", maintenanceCost: "400만원" },
    { service: "무인골프장", startUpCost: "34,412만원", maintenanceCost: "1,100만원" },
    { service: "무인문구점", startUpCost: "4,250만원", maintenanceCost: "710만원" },
    { service: "타사 전자담배 무인매장", startUpCost: "7,000만원", maintenanceCost: "1,000만원" },
  ]

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            내 상황에 맞는 <span className={styles.orangeText}>창업 패키지</span>를 고를 수 있어요
          </h2>
          <p className={styles.subTitle}>
          합리적인 비용으로 내 상황에 알맞는 창업을 시작해 보세요
          </p>
        </div>
        <div className={styles.packageCardBox}>
          <div className={styles.topBox}>
            <div className={styles.basicCard}>
              <p className={styles.packageName}>초가성비 패키지</p>
              <div className={styles.packageContentBox}>
                <p className={styles.price}>3,000만원</p>
                <p className={styles.include}>(가맹비 500만원 포함)</p>
                <img src={packageBasic} alt="실내외 간판, IoT설비, 자판기 4대, 키오스크 2대 포함" />
              </div>
            </div>
            <div className={styles.allInOneCard}>
              <p className={`${styles.packageName} ${styles.allInOne}`}>올인원 패키지</p>
              <div className={styles.packageContentBox}>
                <p className={`${styles.price} ${styles.allInOne}`}>5,500만원</p>
                <p className={styles.include}>(가맹비 500만원 포함)</p>
                <img src={packageAllInOne} alt="실내외 간판, IoT설비, 자판기 4대, 키오스크 2대에 인테리어 포함" />
              </div>
            </div>
          </div>
          <div className={styles.bottomBox}>
            <ul className={styles.bottomBoxList}>
              <li className={styles.listEach}>
                <p className={styles.bottomBoxTxt}>계약이행보증금</p>
                <div className={styles.relative}>
                  <img src={orangeLine} alt="취소선" className={styles.cancelLine} />
                  <span className={styles.bottomBoxPrice}>100만원</span>
                </div>
              </li>
              <li className={styles.listEach}>
                <p className={styles.bottomBoxTxt}>초도물품</p>
                <div className={styles.relative}>
                  <img src={orangeLine} alt="취소선" className={styles.cancelLine} />
                  <span className={styles.bottomBoxPrice}>2,500만원</span>
                </div>
              </li>
              <li className={styles.listEach}>
                <p className={styles.bottomBoxTxt}>교육비</p>
                <div className={styles.relative}>
                  <img src={orangeLine} alt="취소선" className={styles.cancelLine} />
                  <span className={styles.bottomBoxPrice}>50만원</span>
                </div>
              </li>
            </ul>
            <p className={styles.allText}>전부 <span className={styles.allTextOrange}>0원!!!</span></p>
          </div>
        </div>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>
            타 무인 서비스와 비교해도<br/>
            압도적으로 차이나는 <span className={styles.orangeText}>창업 및 유지 비용</span>
          </h3>
        </div>
        <figure className={styles.diagramBox}>
          <div className={styles.diagramTitle}>
            <div className={styles.dummy}></div>
            <div className={`${styles.diagramTitleTxt} ${styles.index0}`}>창업비용</div>
            <div className={`${styles.diagramTitleTxt} ${styles.index1}`}>
              <p>유지비용</p>
              <span className={styles.diagramTitleTxtSmall}>(월세, 관리비 제외)</span>
            </div>
          </div>
          <ul className={styles.firstUl}>
            {serviceCostList.map((item, index) => (
              <li className={styles.firstLi} key={`list_${index}`}>
                <ul className={styles.secondUl}>
                  <li className={styles.secondLi1}>{item.service}</li>
                  <li className={styles.secondLi2}>{item.startUpCost}</li>
                  <li className={styles.secondLi3}>{item.maintenanceCost}</li>
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles.diagramPuffu}>
            <div className={styles.diagramPuffuLogo}>
              <img src={puffuWhite} alt="푸푸" />
            </div>
            {isTabletAndDesktop ? (
              <div className={`${styles.diagramPuffuTxt} ${styles.index0}`}>3,000만원/5,500만원</div>
            ) : (
              <div className={`${styles.diagramPuffuTxt} ${styles.index0}`}>3,000만원/<br/>5,500만원</div>
            )}
            <div className={`${styles.diagramPuffuTxt} ${styles.index1}`}>0원</div>
          </div>
        </figure>
      </div>
    </div>
  )
})

export default Section10;
import { forwardRef } from "react";
import styles from "./Section13.module.scss";
import procedure01 from "../resources/procedure01.png";
import procedure02 from "../resources/procedure02.png";
import procedure03 from "../resources/procedure03.png";
import procedure04 from "../resources/procedure04.png";
import procedure05 from "../resources/procedure05.png";
import procedure06 from "../resources/procedure06.png";
import procedureMobile01 from "../resources/procedureMobile01.png";
import procedureMobile02 from "../resources/procedureMobile02.png";
import procedureMobile03 from "../resources/procedureMobile03.png";
import procedureMobile04 from "../resources/procedureMobile04.png";
import procedureMobile05 from "../resources/procedureMobile05.png";
import procedureMobile06 from "../resources/procedureMobile06.png";
import rightWhiteDoubleArrow from "../resources/rightWhiteDoubleArrow.png";
import { useResponsive } from "../utils/useResponsive";


const Section13 = forwardRef((props, ref) => {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const procedureList = [
    { title: "1번 가맹상담", img: procedure01, imgMobile: procedureMobile01 },
    { title: "2번 상권분석", img: procedure02, imgMobile: procedureMobile02 },
    { title: "3번 가맹계약체결", img: procedure03, imgMobile: procedureMobile03 },
    { title: "4번 교육 및 오픈준비", img: procedure04, imgMobile: procedureMobile04 },
    { title: "5번 시설공사", img: procedure05, imgMobile: procedureMobile05 },
    { title: "6번 매장오픈", img: procedure06, imgMobile: procedureMobile06 },
  ]

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
          창업절차 안내
          </h2>
        </div>
        <div className={styles.procedureBox}>
          {isTabletAndDesktop ? (
            procedureList.map((item, index) => (
            <div className={styles.imgBox} key={`procedure_${index}`}>
              <img src={item.img} alt={item.title} className={styles.orangeBlock} />
              {index === procedureList.length - 1 ? null : (
                <img src={rightWhiteDoubleArrow} alt="오른쪽 화살표 아이콘" className={styles.rightArrow} />
              )}
            </div>
          ))
          ) : (
            procedureList.map((item, index) => (
              <div className={styles.imgBox} key={`procedure_${index}`}>
                <img src={item.imgMobile} alt={item.title} className={styles.orangeBlock} />
                {index === procedureList.length - 1 ? null : (
                  <img src={rightWhiteDoubleArrow} alt="아래 화살표 아이콘" className={styles.downArrow} />
                )}
              </div>
            ))
          )}
        </div>
        <p className={styles.subTxt}>당사는 귀하가 점포를 선정하는데 도움을 주기 위하여 설치장소, 통행인의 수, 지역의 특징,{isTabletAndDesktop && <br/>}
        업종의 특성에 따른 매출 성향 등을 귀하에게 조언할 수 있습니다.</p>
      </div>
    </div>
  )
})

export default Section13;
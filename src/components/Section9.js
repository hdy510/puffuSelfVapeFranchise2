import styles from "./Section9.module.scss";
import { useScrollFadeIn } from "../utils/useScrollFadeIn";
import animations from "./titleAnimation.module.scss";



function Section9 () {
  const { ref: titleRef, isVisible: isTitleVisible } = useScrollFadeIn({ threshold: 0.3 });
  const { ref: subTitleRef, isVisible: isSubTitleVisible } = useScrollFadeIn({ threshold: 0.3 });

  return (
    <div className={styles.container}>
      <div  className={styles.wrap}>
        <div className={styles.titleBox}>
          <p ref={titleRef} className={`${styles.title} ${animations.fadeInUp} ${isTitleVisible ? animations.show : ""}`}>
          이 모든게 <span className={styles.orangeText}>5,500만원</span> 으로 충분합니다!
          </p>
          <p ref={subTitleRef} className={`${styles.subTitle}  ${animations.fadeInUp} ${isSubTitleVisible ? animations.show : ""}`}>
          인테리어 제외, <span className={styles.subOrangeText}>3,000만원</span> 으로 창업 가능
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section9;
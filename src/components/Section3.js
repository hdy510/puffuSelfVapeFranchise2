import styles from "./Section3.module.scss";
import animations from "./titleAnimation.module.scss";
import worry1Txt from "../resources/worry1Txt.png";
import worry2Txt from "../resources/worry2Txt.png";
import worry3Txt from "../resources/worry3Txt.png";
import worry4Txt from "../resources/worry4Txt.png";
import worry5Txt from "../resources/worry5Txt.png";
import worry6Txt from "../resources/worry6Txt.png";
import worry1Emoji from "../resources/worry1Emoji.png";
import worry2Emoji from "../resources/worry2Emoji.png";
import worry3Emoji from "../resources/worry3Emoji.png";
import worry4Emoji from "../resources/worry4Emoji.png";
import worry5Emoji from "../resources/worry5Emoji.png";
import worry6Emoji from "../resources/worry6Emoji.png";
import worry1TxtMobile from "../resources/worry1TxtMobile.png";
import worry2TxtMobile from "../resources/worry2TxtMobile.png";
import worry3TxtMobile from "../resources/worry3TxtMobile.png";
import worry4TxtMobile from "../resources/worry4TxtMobile.png";
import worry5TxtMobile from "../resources/worry5TxtMobile.png";
import worry6TxtMobile from "../resources/worry6TxtMobile.png";
import { useResponsive } from "../utils/useResponsive";
import { useScrollFadeIn } from "../utils/useScrollFadeIn";




function Section3 () {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const { ref: wrapRef, isVisible: isWrapVisible } = useScrollFadeIn({ threshold: 0.3 });
  const worries = [
    { txt: worry1Txt, txtMobile: worry1TxtMobile, emoji: worry1Emoji, altTxt: "업종 변경을 고려하고 있어요", altEmoji: "턱을 만지면서 고민하는 이모티콘" },
    { txt: worry2Txt, txtMobile: worry2TxtMobile, emoji: worry2Emoji, altTxt: "소자본으로 안정적으로 창업하고 싶어요", altEmoji: "행복한 표정의 이모티콘" },
    { txt: worry3Txt, txtMobile: worry3TxtMobile, emoji: worry3Emoji, altTxt: "다점포 운영을 계획하고 있어요", altEmoji: "선글라스를 낀 자신감 있는 이모티콘" },
    { txt: worry4Txt, txtMobile: worry4TxtMobile, emoji: worry4Emoji, altTxt: "은퇴 후 사업을 계획하고 있어요", altEmoji: "나이 드신 어른 이모티콘" },
    { txt: worry5Txt, txtMobile: worry5TxtMobile, emoji: worry5Emoji, altTxt: "치솟는 인건비가 부담스러워요", altEmoji: "한 쪽 눈에서만 눈물이 나오는 슬퍼보이는 이모티콘" },
    { txt: worry6Txt, txtMobile: worry6TxtMobile, emoji: worry6Emoji, altTxt: "회사와 사업 투잡을 하고 싶어요", altEmoji: "해맑게 웃고 있는 이모티콘" },
  ];
  return (
    <div className={styles.container}>
      <div ref={wrapRef} className={`${styles.wrap} ${animations.fadeInUp} ${isWrapVisible ? animations.show : ""}`}>
        <div className={styles.titleBox}>
          {isTabletAndDesktop ? (
            <h2 className={styles.title}>
              혹시 이런 고민이 있지 않으세요?<br/>
              그렇다면 푸푸 창업, <span className={styles.orangeText}>적극 추천</span>드려요!
            </h2>
          ) : (
            <h2 className={styles.title}>
              혹시 이런 고민이 있지 않으세요?
              <br/>
              그렇다면 푸푸 창업, <span className={styles.orangeText}><br/>적극 추천</span>드려요!
            </h2>
          )}
        </div>
        <ul className={styles.worryBox}>
          {worries.map((w, index) => (
            <li
              className={styles.worryEach}
              key={`worryItem_${index}`}
            >
              {isTabletAndDesktop ? (
                <>
                  <img src={w.txt} alt={w.altTxt} className={styles.worryTxt} />
                  <img src={w.emoji} alt={w.altEmoji} className={styles.worryEmoji} />
                </>
              ) : (
                <>
                  <img src={w.txtMobile} alt={w.altTxt} className={styles.worryTxt} />
                  <img src={w.emoji} alt={w.altEmoji} className={styles.worryEmoji} />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

  export default Section3;
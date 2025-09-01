import styles from "./Section17.module.scss";
import puffu from "../resources/puffu.png";
import kakaotalk from "../resources/kakaotalk.png";
import youtube from "../resources/youtube.png";
import instagram from "../resources/instagram.png";
import blog from "../resources/blog.png";


function Section17 () {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <p className={styles.title}>신뢰를 통해 기회를 만들어 드리는</p>
          <div className={styles.titleSecondRow}>
            <img src={puffu} alt="푸푸" className={styles.puffu} />
            <p className={styles.title}>와 함께하세요</p>
          </div>
        </div>
        <ul className={styles.snsBox}>
          <li className={styles.snsCard}
            onClick={() => window.open("https://pf.kakao.com/_LUaGn", "_blank")}
          >
            <img src={kakaotalk} alt="카카오톡 문의" className={styles.icon} />
            <p className={styles.snsName}>카카오톡 문의</p>
          </li>
          <li className={styles.snsCard}
            onClick={() => window.open("https://www.instagram.com/puffu_official/?hl=ko", "_blank")}
          >
            <img src={instagram} alt="푸푸 인스타그램" className={styles.icon} />
            <p className={styles.snsName}>푸푸 인스타그램</p>
          </li>
          <li className={styles.snsCard}
            onClick={() => window.open("https://www.youtube.com/@PuffuOfficial", "_blank")}
          >
            <img src={youtube} alt="푸푸 유튜브" className={styles.icon} />
            <p className={styles.snsName}>푸푸 유튜브</p>
          </li>
          <li className={styles.snsCard}
            onClick={() => window.open("https://blog.naver.com/puffuofficial", "_blank")}
          >
            <img src={blog} alt="푸푸 블로그" className={styles.icon} />
            <p className={styles.snsName}>푸푸 블로그</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Section17;
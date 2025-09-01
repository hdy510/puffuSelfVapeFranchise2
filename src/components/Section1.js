import styles from "./Section1.module.scss";
import headerLogo from "../resources/headerLogo.png";
import heroVideo from "../resources/heroVideo.mp4";

function Section1 () {
  return (
    <div className={styles.container}>
      <div className={styles.videoBox}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.dimmed} />
      <img src={headerLogo} alt="24시 무인 전자담배 PUFFU" className={styles.logo} />
    </div>
  );
}

export default Section1;
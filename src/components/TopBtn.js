import { useState, useEffect } from "react";
import upIcon from "../resources/foldIcon.png";
import styles from "./TopBtn.module.scss";

function TopBtn() {
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (scrollTop + winHeight >= docHeight - 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.container} ${visible ? styles.show : ""}`}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      <img
        src={upIcon}
        alt="Top 버튼 아이콘"
        className={styles.icon}
      />
    </div>
  );
}

export default TopBtn;

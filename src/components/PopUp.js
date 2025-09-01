import { useState, useEffect } from "react";
import styles from "./PopUp.module.scss";
// import popUp1 from "../resources/popUp1.png";
// import popUp2 from "../resources/popUp2.png";
// import popUp3 from "../resources/popUp3.png";
import popUp1 from "../resources/popUp1.gif";
import popUp2 from "../resources/popUp2.gif";
import popUp3 from "../resources/popUp3.gif";

function PopUp({ onClose }) {
  const [popups, setPopups] = useState([
    { id: 1, img: popUp1, visible: true },
    { id: 2, img: popUp2, visible: true },
    { id: 3, img: popUp3, visible: true },
  ]);

  // 처음 마운트 시 localStorage 확인
  useEffect(() => {
    const updated = popups.map((p) => {
      const closedAt = localStorage.getItem(`popup_${p.id}_closedAt`);
      if (closedAt) {
        const diff = Date.now() - Number(closedAt);
        if (diff < 86400000) { // 10초(10000) 동안 유지 (실제는 86400000)
          return { ...p, visible: false };
        } else {
          localStorage.removeItem(`popup_${p.id}_closedAt`);
        }
      }
      return p;
    });
    setPopups(updated);
  
    // 모든 팝업이 invisible 이라면 전체 닫기
    if (updated.every((p) => !p.visible)) {
      onClose();
    }
  }, []);

  // 개별 닫기
  const handleCloseOne = (id) => {
    const updated = popups.map((p) =>
      p.id === id ? { ...p, visible: false } : p
    );
    setPopups(updated);

    if (updated.every((p) => !p.visible)) {
      onClose();
    }
  };

  // 24시간 닫기 (테스트: 10초)
  const handleCloseTemp = (id) => {
    const now = Date.now();
    localStorage.setItem(`popup_${id}_closedAt`, now);

    handleCloseOne(id); // 그냥 일반 닫기 재활용
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        {popups.map((popup, index) => (
          <div
            key={popup.id}
            className={`${styles.popUp} ${styles[`index${index}`]} ${!popup.visible ? styles.hidden : ""}`}
          >
            <div className={styles.imgBox}>
              <img
                src={popup.img}
                alt={`팝업 이미지${popup.id}`}
                className={styles.img}
              />
            </div>
            <div className={styles.btnBox}>
              <div
                className={`${styles.btn} ${styles.index0}`}
                onClick={() => handleCloseTemp(popup.id)}
              >
                <p className={styles.txt}>24시간 닫기</p>
              </div>
              <div
                className={`${styles.btn} ${styles.index1}`}
                onClick={onClose}
              >
                <p className={styles.txt}>팝업 전체닫기</p>
              </div>
              <div
                className={`${styles.btn} ${styles.index2}`}
                onClick={() => handleCloseOne(popup.id)}
              >
                <p className={styles.txt}>닫기</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopUp;

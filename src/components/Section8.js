import { useState } from "react";
import styles from "./Section8.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import interior1a from "../resources/interior1a.png";
import interior1b from "../resources/interior1b.png";
import interior1c from "../resources/interior1c.png";
import interior1d from "../resources/interior1d.png";
import interior2a from "../resources/interior2a.png";
import interior2b from "../resources/interior2b.png";
import interior2c from "../resources/interior2c.png";
import interior2d from "../resources/interior2d.png";
import closeBtn from "../resources/closeBtn.png";


function Section8 () {
  const [ modalImg, setModalImg ] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpenModal = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalImg(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            깔끔하고 직관적인 <span className={styles.orangeText}>인테리어</span>
          </h2>
          <p className={styles.subTitle}>
          통일된 디자인과 깔끔한 공간 구성으로 직관적인 동선과 쾌적한 쇼핑 환경을 제공합니다
          </p>
        </div>
        <div className={styles.swiperBox}>
          <Swiper
            modules={[Navigation]}
            navigation
            className="section8-swiper"
          >
            <SwiperSlide>
              <div className={styles.slideInnerBox}>
                <p className={styles.storeName}>대흥직영점</p>
                <div className={styles.slideImgBox}>
                  {[interior1a, interior1b, interior1c, interior1d].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`대흥직영점 인테리어 이미지${idx + 1}`}
                      className={styles.slideImgEach}
                      onClick={() => handleOpenModal(img)}
                    />
                  ))}
                </div>
                <p className={`${styles.storeName} ${styles.unshown}`}>대흥직영점</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideInnerBox}>
                <p className={styles.storeName}>전주전북대점</p>
                <div className={styles.slideImgBox}>
                  {[interior2a, interior2b, interior2c, interior2d].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`전주전북대점 인테리어 이미지${idx + 1}`}
                      className={styles.slideImgEach}
                      onClick={() => handleOpenModal(img)}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      
      <div className={`${styles.modalScreen} ${modalImg && !isClosing ? styles.open : ""}`} onClick={handleCloseModal}>
        <div className={`${styles.modalBox} ${modalImg && !isClosing ? styles.open : ""}`} onClick={(e) => e.stopPropagation()}>
          {modalImg && (
            <>
              <img src={closeBtn} alt="닫기 버튼" className={styles.closeBtn} onClick={handleCloseModal} />
              <img src={modalImg} alt="인테리어 확대 이미지" className={styles.modalImg} />
            </>
            )}
        </div>
      </div>
    </div>
  )
}

export default Section8;
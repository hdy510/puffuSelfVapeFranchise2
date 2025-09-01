import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./BottomNav.module.scss";
import iconPhone from "../resources/iconPhone.png";
import iconPhoneOrange from "../resources/iconPhoneOrange.png";

function BottomNav() {
  const form = useRef();

  const [bottomOffset, setBottomOffset] = useState(0);

  // Edge + 모바일 환경 감지
  const isMobile = /Mobi/i.test(navigator.userAgent);
  const isEdge = /Edg/i.test(navigator.userAgent);

  useEffect(() => {
    if (!(isMobile && isEdge)) return;

    const inputs = document.querySelectorAll("input, textarea");

    const handleFocus = () => {
      const viewport = window.visualViewport;
      // if (viewport) {
      //   const keyboardHeight = window.innerHeight - viewport.height;
      //   setBottomOffset(keyboardHeight > 0 ? keyboardHeight : 300);
      // } else {
        setBottomOffset(-300);
      // }
    };

    const handleBlur = () => {
      setBottomOffset(0);
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, [isMobile, isEdge]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (!formData.get("privacy_agree")) {
      alert("개인정보처리방침에 동의해주세요.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("문의가 성공적으로 전송되었습니다.");
          form.current.reset(); // 폼 초기화
        },
        (error) => {
          console.log(error.text);
          alert("문의 전송에 실패했습니다. 다시 시도해 주세요.");
        }
      );
  };
  
  return (
      <div className={styles.container}
      style={{ bottom: `${bottomOffset}px` }}
      >
        <div className={styles.wrap}>
          <div className={styles.phoneBox}>
            <img src={iconPhoneOrange} alt="전화 아이콘" className={styles.phoneIcon} />
            <p className={styles.phoneNumber}>070-4242-2000</p>
          </div>
          <form ref={form} noValidate className={styles.formBox} onSubmit={sendEmail}>
            <div className={styles.inputSection}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="이름"
                  placeholder="성함"
                  required
                  className={styles.inputTag}
                />
              </div>
            </div>
            <div className={styles.inputSection}>
              <div className={styles.inputBox}>
                <input
                  type="tel"
                  name="연락처"
                  placeholder="연락처"
                  required
                  className={styles.inputTag}
                />
              </div>
            </div>
            <div className={styles.inputSection}>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  required
                  className={styles.inputTag}
                />
              </div>
            </div>
  
            <label className={styles.agreeBox}>
              <input
                type="checkbox"
                name="privacy_agree"
                className={styles.agreeBoxInput}
              />
              개인정보처리방침 동의
            </label>
  
            <button type="submit" className={styles.submitBtn}>
              <img src={iconPhone} alt="전화 아이콘" className={styles.submitBtnIcon} />
              <p className={styles.submitBtnTxt}>문의하기</p>
            </button>
          </form>
        </div>
      </div>
  );
}

export default BottomNav;

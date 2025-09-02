import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./BottomNav.module.scss";
import iconPhone from "../resources/iconPhone.png";
import iconPhoneOrange from "../resources/iconPhoneOrange.png";
import { useResponsive } from "../utils/useResponsive";

function BottomNav() {
  const form = useRef();
  const [ showModal, setShowModal ] = useState(false);
  const { isTabletAndDesktop } = useResponsive();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (!formData.get("이름")) {
      alert("성함을 입력해 주세요.");
      return;
    }
    const phone = formData.get("연락처");
    const phoneRegex = /^[0-9]+$/;
    if (!phone) {
      alert("연락처를 입력해 주세요.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("연락처는 숫자만 입력해 주세요.");
      return;
    }
    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("이메일을 입력해 주세요.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 주소 형식을 입력해 주세요.");
      return;
    }
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
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.phoneBox}>
            {!isTabletAndDesktop && (
              <p>가맹문의</p>
            )}
            <img src={iconPhoneOrange} alt="전화 아이콘" className={styles.phoneIcon} />
            <p className={styles.phoneNumber}>070-4242-2000</p>
          </div>
          <form ref={form} noValidate className={styles.formBox} onSubmit={sendEmail}>
            <div className={styles.leftBox}>
              <div className={styles.leftBoxA}>
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
              </div>
              <div className={`${styles.inputSection} ${styles.email}`}>
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
            </div>
  
            <div className={styles.rightBox}>
              <label className={styles.agreeBox}>
                <input
                  type="checkbox"
                  name="privacy_agree"
                  className={styles.agreeBoxInput}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setShowModal(true);
                    }
                  }}
                />
                개인정보처리방침 동의
              </label>
    
              <button type="submit" className={styles.submitBtn}>
                <img src={iconPhone} alt="전화 아이콘" className={styles.submitBtnIcon} />
                <p className={styles.submitBtnTxt}>문의하기</p>
              </button>
            </div>
          </form>
        </div>

        {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h4 className={styles.heading4}>개인정보처리방침</h4>
            <div className={styles.modalContentWrap}>
              <p className={styles.modalContentText}>
              개인정보 수집 범위: 이름, 연락처, 이메일 주소<br/><br/>
  
  개인정보 수집 및 이용목적: 브랜드 가맹점주 모집, 온라인 문의 및 상담 자료와 결과 회신<br/><br/>
  
  개인정보의 보유 및 이용기간: 수집일로부터 3년간 보유 및 이용<br/><br/>
  
  개인정보의 제3자 제공: 개인정보는 본사의 유관 부서와 매장 관리자(슈퍼바이저, 매장점주)에게 제공될 수 있습니다.<br/><br/>
  
  정보주체의 권리 및 행사 방법: 정보주체는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 요구 등을 할 수 있습니다. 이러한 요구는 [담당 부서]를 통해 가능합니다.<br/><br/>
  
  개인정보 보호책임자: 허준: puffuofficial@gmail.com<br/><br/>
  
  매장과 관련된 CS의 경우, 해결과정 안내 혹은 결과 회신을 위해 매장 관리자(슈퍼바이저, 매장점주), 본사 유관부서가 연락을 드릴 수 있습니다.<br/><br/>
  
  [정보통신망 이용촉진 및 정보 보호 등에 관한 법률]
  제 74조 1항 3호에 따라 '공포심'이나 '불안감'을 유발하는 심한 욕설, 비하, 협박성 내용이 담긴 내용을 반복적으로 기재할 시, 처벌될 수 있는 점, 안내드립니다.
              </p>
            </div>
            <button className={styles.confirmBtn} onClick={() => setShowModal(false)}>확인</button>
          </div>
        </div>
      )}
      </div>
  );
}

export default BottomNav;

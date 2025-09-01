import styles from "./Footer.module.scss";
import { useResponsive } from "../utils/useResponsive";


function Footer () {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  return (
    <footer className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.leftBox}>
          <div className={styles.leftTopBox}>
            <ul className={styles.leftTopBoxA}>
              <li className={styles.listEach}>
                <span className={styles.label}>상호</span>
                <span>푸푸 24시무인전자담배</span>
              </li>
              <li className={styles.listEach}>
                <span className={styles.label}>주소</span>
                <span>대전 서구 관저중로95번길 74</span>
              </li>
            </ul>
            <ul className={styles.leftTopBoxB}>
              <li className={styles.listEach}>
                <span className={styles.label}>대표자</span>
                <span>원태범</span>
              </li>
              <li className={styles.listEach}>
                <span className={styles.label}>사업자등록번호</span>
                <span>729-86-02229</span>
              </li>
            </ul>
          </div>
          {!isTabletAndDesktop && (
            <div className={styles.contactBox}>
              <p className={styles.contact}>가맹문의</p>
              <p className={styles.phoneNumber}>070-4242-2000</p>
            </div>
          )}
          <p className={styles.copyright}>Copyright ⓒ 푸푸 24시무인전자담배 all Rights Reserved.</p>
        </div>
        {isTabletAndDesktop && (
          <div className={styles.rightBox}>
            <p className={styles.contact}>가맹문의</p>
            <p className={styles.phoneNumber}>070-4242-2000</p>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer;
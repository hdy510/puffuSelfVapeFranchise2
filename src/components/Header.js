import { useState } from "react";
import { useResponsive } from "../utils/useResponsive";
import styles from "./Header.module.scss";
import headerLogo from "../resources/headerLogo.png";
import iconPhone from "../resources/iconPhone.png";
import menuBtn from "../resources/menuBtn.png";
import sideMenuCloseBtn from "../resources/sideMenuCloseBtn.png";

function Header({ section2Ref, section4Ref, section10Ref, section13Ref, section14Ref }) {
  const { isMobile, isLargeMobile, isTabletAndDesktop } = useResponsive();
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.container}>
        {isTabletAndDesktop ? (
          <div className={styles.wrap}>
            <a href="/" className={styles.logo}>
              <img src={headerLogo} alt="로고" className={styles.logoImg} />
            </a>
            <nav className={styles.nav}>
              <div className={styles.navList}
              onClick={() => scrollToSection(section2Ref)}
              >기회는 지금!</div>
              <div className={styles.navList}
              onClick={() => scrollToSection(section4Ref)}
              >푸푸의 메리트</div>
              <div className={styles.navList}
              onClick={() => scrollToSection(section10Ref)}
              >창업 패키지</div>
              <div className={styles.navList}
              onClick={() => scrollToSection(section13Ref)}
              >창업절차</div>
              <div className={styles.navList}
              onClick={() => scrollToSection(section14Ref)}
              >창업문의</div>
            </nav>
            <div className={styles.phone}>
              <div className={styles.firstRow}>
                <img src={iconPhone} alt="전화 아이콘" className={styles.phoneIcon} />
                <p>가맹문의</p>
              </div>
              <div className={styles.number}>070-4242-2000</div>
            </div>
            </div>
        ) : (
          <div style={{ height: "100%", position: "relative" }}>
            <div className={`${styles.wrap} ${styles.isMobile}`}>
              <a href="/" className={styles.logo}>
                <img src={headerLogo} alt="로고" className={styles.logoImg} />
              </a>
              <div className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <img src={sideMenuCloseBtn} alt="닫기 아이콘" />
                ) : (
                  <img src={menuBtn} alt="메뉴 아이콘" />
                )}
              </div>
            </div>
            <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
            <nav className={styles.navMobile}>
              <div className={styles.navListMobile}
              onClick={() => {
                scrollToSection(section2Ref)
                setIsMenuOpen(!isMenuOpen)
              }}
              >기회는 지금!</div>
              <div className={styles.navListMobile}
              onClick={() => {
                scrollToSection(section4Ref)
                setIsMenuOpen(!isMenuOpen)
              }}
              >푸푸의 메리트</div>
              <div className={styles.navListMobile}
              onClick={() => {
                scrollToSection(section10Ref)
                setIsMenuOpen(!isMenuOpen)
              }}
              >창업 패키지</div>
              <div className={styles.navListMobile}
              onClick={() => {
                scrollToSection(section13Ref)
                setIsMenuOpen(!isMenuOpen)
              }}
              >창업절차</div>
              <div className={styles.navListMobile}
              onClick={() => {
                scrollToSection(section14Ref)
                setIsMenuOpen(!isMenuOpen)
              }}
              >창업문의</div>
            </nav>
          </div>
          </div>
        )}
    </header>
  );
}

export default Header;
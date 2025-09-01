import styles from "./Section6.module.scss";
import puffuWhite from "../resources/puffuWhite.png";


function Section6 () {

  const productDiversityList = [
    { brand: "A사", kind: "15종", count: "15~60개" },
    { brand: "B사", kind: "170종", count: "1,700개" },
    { brand: "C사", kind: "192종", count: "1,920개" },
    { brand: "D사", kind: "45종", count: "226개" },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>
            타 무인매장과 비교해도<br/>
            압도적으로 차이나는 <span className={styles.orangeText}>상품 다양성</span>
          </h3>
        </div>
        <figure className={styles.diagramBox}>
          <div className={styles.diagramTitle}>
            <div className={styles.dummy}></div>
            <div className={styles.diagramTitleTxt}>상품 가짓수</div>
            <div className={styles.diagramTitleTxt}>총 상품수</div>
          </div>
          <ul className={styles.firstUl}>
            {productDiversityList.map((item, index) => (
              <li className={styles.firstLi} key={`list_${index}`}>
                <ul className={styles.secondUl}>
                  <li className={styles.secondLi1}>{item.brand}</li>
                  <li className={styles.secondLi2}>{item.kind}</li>
                  <li className={styles.secondLi3}>{item.count}</li>
                </ul>
              </li>
            ))}
          </ul>
          <div className={styles.diagramPuffu}>
            <div className={styles.diagramPuffuLogo}>
              <img src={puffuWhite} alt="푸푸" className={styles.puffuImg} />
            </div>
            <div className={styles.diagramPuffuTxt}>230종</div>
            <div className={styles.diagramPuffuTxt}>2,850개</div>
          </div>
        </figure>
      </div>
    </div>
  )
}

export default Section6;
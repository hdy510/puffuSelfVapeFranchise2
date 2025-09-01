import styles from "./Section16.module.scss";
import { useState } from "react";
import foldIcon from "../resources/foldIcon.png";
import qIcon from "../resources/qIcon.png";


function Section16 () {
  const [ tab, setTab ] = useState(0);
  const [openItems, setOpenItems] = useState({});
  const tabs = [
    "창업 비용/조건",
    "운영",
    "상품/재고",
    "수익/매출",
    "계약/지원",
    "법적/기타 이슈"
  ]
  const faqData = [
    { 
      category: "창업 비용/조건",
      items: [
        {
          question: "가맹점 창업 시 초기 비용은 얼마인가요?",
          answer: "상가 구입비용제외 초가성비 패키지는 3000만원이고 자판기, 키오스크, iot 장비, 간판을 제공해드립니다. 올인원 패키지는 5500만원이고 A~Z까지 푸푸에서 전담해서 매장을 제공해드립니다.",
          subAnswer: "*단 , 10~15평 매장 기준 , 추가공사견적제외"
        },
        {
          question: "추가 비용이 있나요?",
          answer: "점주가 원하는 추가 공사 비용을 제외한 이외 패키지 비용은 추가 비용이 없습니다."
        },
        {
          question: "월세는 얼마가 적당한가요?",
          answer: "보통 월세는 200만 원 내외이며, 유동인구가 많은 곳은 더 높을 수 있습니다. 하지만 그만큼 매출 증가도 기대할 수 있습니다."
        }
      ]
     },
     { 
      category: "운영",
      items: [
        {
          question: "무인매장은 어떻게 운영되나요? 사람이 아예 필요 없나요?",
          answer: "무인으로 운영되기 때문에 별도의 직원이 필요하지 않습니다. 점주님께서 하실 일은 상품 보충과 청소 정도입니다."
        },
        {
          question: "점주는 일주일에 얼마나 시간을 투자해야 하나요?",
          answer: "월 매출 1,200만 원 기준, 주 1회 정도 재고 보충과 청소만 하시면 됩니다. 매출이 더 오르면 그에 맞춰 시간을 조금 더 투자하셔도 좋습니다."
        }
      ]
     },
     { 
      category: "상품/재고",
      items: [
        {
          question: "재고는 본사가 공급하나요?",
          answer: "재고는 매장 또는 집 등 원하시는 장소로 편리하게 배송해 드립니다."
        },
        {
          question: "혹시 재고 부담이 크지 않을까요?",
          answer: "푸푸는 위탁판매 방식이라 점주가 직접 재고를 떠안을 필요가 없습니다. 판매된 만큼만 정산되므로 재고 손실 걱정 없이 운영할 수 있어요."
        },
        {
          question: "신제품이 나오면 자동으로 공급되나요?",
          answer: "시장 트렌드를 반영해 엄선한 신제품을 지속적으로 공급합니다."
        }
      ]
     },
     { 
      category: "상권",
      items: [
        {
          question: "어떤 상권이 적합한가요?",
          answer: "무인매장은 유동인구가 많은 곳이라면 어디든 적합합니다. 특히 전자담배는 오후 6시~새벽 1시에 가장 많이 판매되기 때문에 번화가나 술집 상권이 유리합니다."
        },
        {
          question: "근처에 다른 전자담배 매장이 있어도 괜찮은가요?",
          answer: "괜찮습니다. 오히려 주변에 전자담배 매장이 있으면 이미 수요가 형성되어 있어 낙수효과를 기대할 수 있습니다. 또한 무인매장은 비교적 저렴한 가격으로 판매하기 때문에 충분한 경쟁력이 있습니다."
        }
      ]
     },
     { 
      category: "계약/지원",
      items: [
        {
          question: "계약 기간은 어떻게 되나요?",
          answer: "계약 기간은 2년이며, 이후 2년 단위로 연장됩니다."
        },
        {
          question: "본사에서 어떤 지원을 해주나요?",
          answer: "대외적인 마케팅, 매장 인테리어 인쇄물, 신제품 업데이트 등을 지원합니다 "
        }
      ]
     },
     { 
      category: "법적/기타 이슈",
      items: [
        {
          question: "전자담배 판매는 합법적인가요? 허가 절차가 복잡하지는 않나요?",
          answer: "전자담배 판매는 합법적인 사업이며, 특별히 어려운 허가 절차가 필요하지 않습니다. 점주님께서 부담 없이 창업을 시작하실 수 있습니다."
        },
        {
          question: "청소년 출입 제한이나 본인 인증은 어떻게 하나요?",
          answer: "법적으로 허용된 인증 수단은 신분증, 모바일 신분증, 신용카드입니다. 다만 도용 문제가 있는 신분증·신용카드 대신 모바일 인증을 최우선으로 적용하며, 저희는 2중 모바일 인증과 미성년자 차단문을 통해 청소년 출입을 원천 차단합니다."
        },
        {
          question: "무인매장에서 발생할 수 있는 문제는 어떻게 대응하나요?",
          answer: "무인매장에서 주로 우려되는 문제는 도난, 파손, 매장 무단 사용 등입니다. 푸푸는 소비자가 제품을 직접 만질 수 없고 오직 키오스크로만 이용하기 때문에 도난 문제에서 자유롭습니다. 파손의 경우 본사 CCTV 관제를 통해 가해자 확인을 지원하며, 신속한 A/S로 최대한 빠른 복구를 지원합니다."
        }
      ]
     },
  ]
  const toggleAnswer = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index] : !prev[index]
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>자주 묻는 질문</h2>
        </div>
        <ul className={styles.tabBox}>
          {tabs.map((item, index) => (
            <li
              key={`faqTab_${index}`}
              className={`${styles.tabMenu} ${tab === index ? styles.active : ""}`}
              onClick={() => {
                setTab(index);
                setOpenItems({});
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.listBox}>
          {faqData[tab].items.map((data, index) => (
            <li className={`${styles.listEach} ${index === faqData[tab].items.length - 1 ? styles.last : ""}`} key={`faqItem_${tab}_${index}`}>
              <div
                className={styles.questionBox}
                onClick={() => toggleAnswer(index)}
              >
                <img src={qIcon} alt="Q 아이콘" />
                <p className={styles.question}>{data.question}</p>
                <img
                  src={foldIcon}
                  alt="펼치기 아이콘"
                  className={`${styles.foldIcon} ${openItems[index] ? styles.open : ""}`}
                />
              </div>
              <div
                className={`${styles.answerBox} ${
                  openItems[index] ? styles.open : ""
                }`}
              >
                <p className={styles.answer}>{data.answer}</p>
                {data.subAnswer && (
                  <p className={styles.subAnswer}>{data.subAnswer}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default Section16;
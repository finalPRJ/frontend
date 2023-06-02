// 중고차 보험에 관한 페이지
const oldcar = () => {
  return (
    <div>
      <text className="contents-text-num">07</text>
      <text className="contents-text-title">중고차 보험</text>
      <li className="contents-text">
        중고차를 구매한 경우를 대비한 보험으로, 중고차의 차량 상태나 사용기간
        등에 따라 다양한 보험 상품이 제공됩니다.
      </li>
      <li className="contents-text">
        일반적으로 아래와 같은 보장 내용을 제공합니다.
      </li>
      <ol>
        <li className="contents-text">자동차상해보험</li>
        <ul className="contents-text">
          중고차의 사고나 파손 등에 대한 보상을 제공하는 보험
          <br />
          보상 금액은 보험 가입 시 선택한 보험금액과 보험사의 보상 기준에 따라
          다를 수 있습니다.
        </ul>
        <li className="contents-text">
          <p />
          자동차도난방지보험
        </li>
        <ul className="contents-text">
          중고차의 도난이 발생한 경우, 도난된 자동차의 가치에 해당하는 금액을
          보상해주는 보험입니다.
        </ul>
        <li className="contents-text">
          <p />
          자동차자기부담금면제보험
        </li>
        <ul className="contents-text">
          자동차 사고 발생 시 부담하는 자기부담금을 면제해주는 보험입니다.
          일반적으로는 보험 가입금액과 보상 한도가 정해져 있습니다.
        </ul>
        <li className="contents-text">
          <p />
          자동차연식별상해보험
        </li>
        <ul className="contents-text">
          중고차의 연식에 따라 상해 보상금액을 제한하는 보험으로, 자동차의
          연식에 따라 보상 한도가 다르게 적용됩니다.
        </ul>
      </ol>
      <li className="contents-text">중고차보험을 제공하는 각 보험사</li>
      <ol>
        <li className="contents-text">
          <p />
          KB손해보험 중고차보험
        </li>
        <ul className="contents-text">
          자차사고, 타차사고, 자연재해, 기타사고로부터 보호
        </ul>
        <ul className="contents-text">
          보장내용: 신차보장, 비갱신 보험료제도, 무상점검 서비스
        </ul>
        <ul className="contents-text">
          가입대상: 1년 이상 보험기간이 남은 중고차 보유자
        </ul>
        <li className="contents-text">
          <p />
          현대해상 중고차보험
        </li>
        <ul className="contents-text">
          자차사고, 타차사고, 자연재해, 스크래치(깍임), 도난, 파손 등으로부터
          보호
        </ul>
        <ul className="contents-text">
          보장내용: 신차보장, 무상 AS서비스, 부분손해보상 제도 등
        </ul>
        <ul className="contents-text">
          가입대상: 중고차 1년 이내 구입자 또는 1년 이내 이전 소유자가 있던 차량
          보유자
        </ul>
        <li className="contents-text">
          <p />
          AXA손해보험 중고차보험
        </li>
        <ul className="contents-text">
          자차사고, 타차사고, 도난, 파손 등으로부터 보호
        </ul>
        <ul className="contents-text">
          보장내용: 차량용품 보장, 적정한 보험료 평가, 무상 정비서비스 등
        </ul>
        <ul className="contents-text">
          가입대상: 1년 이상 보험기간이 남은 중고차 보유자
        </ul>
        <li className="contents-text">
          <p />
          메리츠화재 중고차보험
        </li>
        <ul className="contents-text">
          자차사고, 타차사고, 자연재해, 스크래치, 도난 등으로부터 보호
        </ul>
        <ul className="contents-text">
          보장내용: 신차보장, 무상 정비서비스, 부분손해보상 제도 등
        </ul>
        <ul className="contents-text">
          가입대상: 1년 이상 보험기간이 남은 중고차 보유자
        </ul>
        <li className="contents-text">
          <p />
          동부화재 중고차보험
        </li>
        <ul className="contents-text">
          자차사고, 타차사고, 자연재해, 스크래치, 도난 등으로부터 보호
        </ul>
        <ul className="contents-text">
          보장내용: 무상 정비서비스, 부분손해보상 제도, 적정 보험료 제공 등
        </ul>
        <ul className="contents-text">
          가입대상: 1년 이상 보험기간이 남은 중고차 보유자
        </ul>
      </ol>
    </div>
  );
};

export default oldcar;

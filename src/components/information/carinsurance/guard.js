// 자동차 지키미 보험에 관한 페이지
const guard = () => {
  return (
    <div>
      <div>
        <text className="contents-text-num">03-1</text>
        <text className="contents-text-title">자동차 지키미 보험</text>
        <ul>
          <li className="contents-text">
            보험 가입자가 운전 중에 발생할 수 있는 사고를 예방하고 , 안전한 운전
            습관을 유도하기 위해 제공되는 보험 상품
          </li>
          <li className="contents-text">
            일반적으로 운전 중 차선 이탈, 안전거리 미확보, 급가속/급제동, 급커브
            등 운전자의 습관에 따라 보험료 할인을 받을 수 있습니다.
          </li>
          <li className="contents-text">
            운전 중 발생할 수 있는 사고에 대해 GPS를 통해 실시간으로 위치를
            확인하여 긴급 출동 서비스를 제공하는 경우도 있습니다.
          </li>
        </ul>
      </div>
      <text className="contents-text-num">
        <p />
        03-2
      </text>
      <text className="contents-text-title">지키미 보험을 제공하는 보험사</text>
      <ol>
        <li className="contents-text">KB손해보험의 'KB차차 지키미' 보험</li>
        <ul className="contents-text">운전자 습관 확인 및 개선 서비스</ul>
        <ul className="contents-text">보험료 할인: 50%까지 가능</ul>
        <li className="contents-text">
          <p />
          삼성화재의 '자차보험 지킴이' 보험
        </li>
        <ul className="contents-text">운전자 습관 개선 서비스</ul>
        <ul className="contents-text">위치 기반 긴급출동 서비스 제공</ul>
        <ul className="contents-text">보험료 할인: 최대 50%까지 가능</ul>
        <li className="contents-text">
          <p />
          농협손해보험의 '슈퍼바디가드 지키미' 보험
        </li>
        <ul className="contents-text">운전자 습관 확인 및 개선 서비스</ul>
        <ul className="contents-text">위치 기반 긴급출동 서비스 제공</ul>
        <ul className="contents-text">보험료 할인: 최대 20%까지 가능</ul>
        <li className="contents-text">
          <p />
          현대해상의 'Safe-D 보험'
        </li>
        <ul className="contents-text">운전자 습관 개선 서비스</ul>
        <ul className="contents-text">위치 기반 긴급출동 서비스 제공</ul>
        <ul className="contents-text">보험료 할인: 최대 50%까지 가능</ul>
        <li className="contents-text">
          <p />
          롯데손해보험의 '셀프카 지키미' 보험
        </li>
        <ul className="contents-text">운전자 습관 확인 및 개선 서비스</ul>
        <ul className="contents-text">위치 기반 긴급출동 서비스 제공</ul>

        <ul className="contents-text">보험료 할인: 최대 35%까지 가능</ul>
      </ol>
    </div>
  );
};

export default guard;

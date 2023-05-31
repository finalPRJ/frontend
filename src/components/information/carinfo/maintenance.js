// 유지보수, 보증기간
const maintenance = () => {
  return (
    <div>
      <div>
        <text className="contents-text-num">04-1</text>
        <text className="contents-text-title">유지보수</text>
        <ul>
          <li className="contents-text">
            유지보수란? <b>차량을 운행하면서 필요한 유지보수와 수리 비용</b>을
            의미
          </li>
          <li className="contents-text">
            유지보수 비용에는
            <b>정기적인 점검 및 교체가 필요한 부품들의 비용</b>, 예를 들면
            엔진오일, 브레이크 패드, 에어 필터 등이 포함됩니다.
            <br />
            또한, 차량의 연료, 타이어, 브레이크 등의 <b>소모품들의 교체 비용</b>
            도 유지보수 비용에 포함됩니다.
          </li>
        </ul>
      </div>
      <text className="contents-text-num">
        <br />
        04-2
      </text>
      <text className="contents-text-title">보증기간</text>
      <ul>
        <li className="contents-text">
          제조사에서 제공하는 기간 동안{' '}
          <b>차량의 일부 부품 및 기능의 수리 또는 교체를 무상</b>으로 해주는
          서비스입니다.
        </li>
        <li className="contents-text">
          일반적으로 보증 기간은 3~5년 사이이며, <b>주행거리에 따라 제한</b>이
          있을 수 있습니다.
        </li>
        <li className="contents-text">
          제조사마다 보증 기간은 다르며 보통 엔진, 변속기, 브레이크, 서스펜션
          등과 같은 <b>중요한 부품 기능에 대한 보증이 포함</b>됩니다.
        </li>
        <li className="contents-text">
          <br />각 제조사마다 <b>보증 서비스의 범위와 조건</b>
        </li>
      </ul>
      <ol>
        <li className="contents-text">
          <p />
          <b>현대자동차</b>
        </li>
        <ul className="contents-text">
          현대자동차는 보증 기간이 보통 5년 또는 10만 km(소형차는 3년 또는 10만
          km)이며, 기본 보증 항목으로는{' '}
          <b>엔진, 변속기, 브레이크, 서스펜션, 스티어링 등</b>이 포함됩니다.
          또한, <b>정비 서비스</b>도 제공되며, 이는 보증 기간 내 무상으로
          제공됩니다.
        </ul>
        <li className="contents-text">
          <p />
          <b>기아자동차</b>
        </li>
        <ul className="contents-text">
          기아자동차는 보증 기간이 보통 5년 또는 10만 km(소형차는 3년 또는 10만
          km)이며, <b>보증 항목은 현대자동차와 비슷</b>합니다. 또한,{' '}
          <b>정비 서비스</b>도 제공되며, 이는 보증 기간 내 무상으로 제공됩니다.
        </ul>
        <li className="contents-text">
          <p />
          <b>삼성자동차</b>
        </li>
        <ul className="contents-text">
          삼성자동차는 보증 기간이 보통 5년 또는 10만 km이며, 엔진, 변속기,
          브레이크, 서스펜션, 스티어링 등이 포함된 <b>기본 보증 항목</b> 외에도,{' '}
          <b>가솔린</b>
          엔진 차량에서는 <b>스파크 플러그, 에어컨 컴프레서 등</b>도 보증 대상에
          포함됩니다. <b>정비 서비스</b>는 보증 기간 내 무상으로 제공됩니다.
        </ul>
        <li className="contents-text">
          <p />
          <b>르노삼성자동차</b>
        </li>
        <ul className="contents-text">
          르노삼성자동차는 보증 기간이 보통 5년 또는 10만 km이며, 보증 항목은
          <b>엔진, 변속기, 브레이크, 서스펜션, 스티어링 등</b>이 포함됩니다.
          또한, 보증 기간 내 <b>정비 서비스</b>도 무상으로 제공됩니다.
        </ul>
        <li className="contents-text">
          <p />
          <b>GM대우</b>
        </li>
        <ul className="contents-text">
          GM대우는 보증 기간이 보통 5년 또는 10만 km이며, 엔진, 변속기,
          브레이크, 서스펜션, 스티어링 등이 포함된 <b>기본 보증 항목</b> 외에도,{' '}
          <b>시동 모터, 발전기, 라디에이터 등</b>도 보증 대상에 포함됩니다.{' '}
          <b>정비 서비스</b>는 보증 기간 내 무상으로 제공됩니다.
        </ul>
      </ol>
    </div>
  );
};

export default maintenance;

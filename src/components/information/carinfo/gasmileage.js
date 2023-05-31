import '../../Fonts/Font.css';
import '../../information/information.css';

// 연비
const gasmileage = () => {
  return (
    <div>
      <text className="contents-text-num">01</text>
      <text className="contents-text-title">연비</text>

      <ul>
        <li className="contents-text">
          연비란? <b>주행한 거리에 대한 연료 소비량</b>을 나타내는 단위
          <br />
          연비는 일반적으로 <b>도심 주행, 고속도로 주행, 평균 주행</b> 등 다양한
          조건에서 측정됩니다.
        </li>
        <li className="contents-text">
          <br />
          <b>연비에 영향을 주는 요소</b>는 어떤 것들이 있을까?
          <br />
          차종, 배기량, 엔진 형태, 구동 방식, 변속기 종류, 타이어, 주행 습관,
          유지 보수 상태, 주행 조건 등
        </li>
        <li className="contents-text">
          <br />
          연비는 <b>도심 주행</b>과 <b>고속도로 주행</b>을 기준으로 나뉩니다.
        </li>
        <li className="contents-text">
          * 도심 주행 연비: <b>주행 거리가 짧고 속도가 낮은</b> 도심 지역에서의
          주행 연비
        </li>
        <li className="contents-text">
          * 고속도로 주행 연비: <b>고속도로</b>에서의 주행 연비
        </li>
        <li className="contents-text">
          <br />
          연비는 <b>주행 거리당 연료 소비량</b>으로 <b>표시</b>됩니다.
        </li>
        <li className="contents-text">
          예를 들어 주행 거리가 10km/L일 때, 10km를 주행하는데 1L의 연료가
          필요하다는 의미입니다.
        </li>
      </ul>
    </div>
  );
};

export default gasmileage;

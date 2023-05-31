// 안전 기능
const safe = () => {
  return (
    <div>
      <text className="contents-text-num">03</text>
      <text className="contents-text-title">안전 기능</text>

      <li className="contents-text">
        안전 기능은 제조사별로 차이가 있으므로 일부 <b>대표적인 안전 기능</b>{' '}
        소개
      </li>
      <ol>
        <li className="contents-text">
          <b>현대 자동차</b>
        </li>
        <ul className="contents-text">
          <b>스마트센스</b>(SmartSense): AEB, LKA, BSD 등의 안전 기능을 통합한
          패키지
        </ul>
        <ul className="contents-text">
          <b>RSPA</b>(Rear Seat Passenger Alert): 후측면 문이 열린 상태에서
          후좌석에 아이나 반려동물이 있는 경우 경고 알림
        </ul>
        <ul className="contents-text">
          <b>HDC</b>(Hill-Start Assist Control): 경사면에서의 출발을 보조하여
          안정적인 주행을 돕는 기능
        </ul>
        <li className="contents-text">
          <p />
          <b>기아 자동차</b>
        </li>
        <ul className="contents-text">
          <b>ADAS</b>(Advanced Driver Assistance System): 차량 주변의 상황을
          감지하고 위험한 상황을 예측하여 운전자에게 경고를 주는 시스템
        </ul>
        <ul className="contents-text">
          <b>DAW</b>(Driver Attention Warning): 운전자의 졸음 운전을 감지하고
          경고 알림을 주는 시스템
        </ul>
        <ul className="contents-text">
          <b>AVSM</b>(Advanced Vehicle Safety Management): 차량 안전성 평가를
          위한 시스템
        </ul>
        <li className="contents-text">
          <p />
          <b>삼성 자동차</b>
        </li>
        <ul className="contents-text">
          <b>FCA</b>(Forward Collision Avoidance): 차량 주변의 상황을 감지하여
          위험한 상황이 발생할 경우 자동으로 긴급 제동을 하는 시스템
        </ul>
        <ul className="contents-text">
          <b>LCA</b>(Lane Change Assist): 차량 주변의 상황을 감지하여 차선 변경
          시 경고 알림을 주는 시스템
        </ul>
        <ul className="contents-text">
          <b>TJA</b>(Traffic Jam Assist): 교통 체증 상황에서 차간 거리 유지와
          속도 조절을 자동으로 수행하는 시스템
        </ul>
        <li className="contents-text">
          <p />
          <b>쉐보레</b>
        </li>
        <ul className="contents-text">
          <b>Teen Driver</b>: 운전자의 운전습관을 분석하여 주행 중 위험한 상황이
          발생할 경우 경고 알림을 주는 시스템
        </ul>
        <ul className="contents-text">
          <b>Lane Keep Assist with Lane Departure Warning</b>: 차선 이탈 시
          운전자에게 경고 알림을 주고 차선으로 돌아오도록 도와주는 시스템
        </ul>
        <ul className="contents-text">
          <b>Rear Vision Camera</b>: 후방 카메라를 통해 차량 주변 상황을
          모니터링하는 시스템
        </ul>
      </ol>
    </div>
  );
};

export default safe;

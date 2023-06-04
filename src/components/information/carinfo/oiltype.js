import '../../information/information.scss';

// 연료 종류
const oiltype = () => {
  return (
    <div>
      <text className="contents-text-num">02</text>
      <text className="contents-text-title">연료 종류</text>

      <ol>
        <li className="contents-text">
          <b>휘발유(Gasoline)</b>
        </li>
        <ul className="contents-text">
          가장 일반적인 연료 종류로서, <b>가격이 비교적 저렴</b>하고{' '}
          <b>가볍고 경제적인 차량</b>에서 사용
          <br />
        </ul>
        <li className="contents-text">
          <p />
          <b>경유(Diesel)</b>
        </li>
        <ul className="contents-text">
          휘발유보다 약간 비싸지만,{' '}
          <b>토크(회전력)가 좋아 중대형 차량이나 트럭</b> 등에 많이 사용
        </ul>
        <li className="contents-text">
          <p />
          <b>LPG(Liquefied Petroleum Gas)</b>
        </li>
        <ul className="contents-text">
          휘발유나 경유에 비해 가격이 저렴하고 <b>환경 친화적</b>인 연료
          <br />
          가스탱크를 장착해야 하기 때문에 <b>차량 무게가 늘어나</b>는 단점이
          있습니다.
        </ul>
        <li className="contents-text">
          <p />
          <b>전기(Electric)</b>
        </li>
        <ul className="contents-text">
          전기차는 <b>배출가스가 없으며 우수한 경제성</b>을 보입니다.
          <br />
          그러나 충전 인프라가 부족하고 배터리 수명 문제 등의 발전이 필요합니다.
        </ul>
        <li className="contents-text">
          <p />
          <b>수소(Hydrogen)</b>
        </li>
        <ul className="contents-text">
          전기차와 마찬가지로 <b>배출가스가 없습니다.</b>
          <br />
          <b>수소 충전소 인프라가 부족</b>하고,{' '}
          <b>수소 자체의 생산과 수송 등의 비용</b>이 많이 들어갑니다
        </ul>
      </ol>
    </div>
  );
};

export default oiltype;

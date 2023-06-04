import '../../information/information.scss';

// 사고기록
const accident = () => {
  return (
    <div>
      <text className="contents-text-num">05</text>
      <text className="contents-text-title">사고기록</text>
      <ul>
        <li className="contents-text">
          사고 기록은 해당 차량이{' '}
          <b>사고나 충돌 등의 사고로 인해 수리가 필요한 경우</b>, 그
          <b>수리 기록</b>이 남게 됩니다. <br />이 기록은 차량이 이전에 사고를
          당했는지 여부를 확인할 수 있는 중요한 정보입니다.
        </li>
        <li className="contents-text">
          <br />
          일반적으로 <b>중고차를 구매</b>할 때, 구매자는 해당 차량의 사고 기록을
          확인하기 위해 <b>사고 이력 조회 서비스</b>를 이용하게 됩니다.
          <br />*<b>사고 이력 조회 서비스</b>란?: 해당 차량의 차대번호(VIN)를
          검색하여 이전에 수리가 필요한 경우 기록 조회
        </li>
        <li className="contents-text">
          <br />
          최근에는 중고차 판매 시, <b>사고 유무를 인증</b>하는{' '}
          <b>'사고 유무 인증서'를 발급</b>하는 경우도 많아졌습니다.
          <br />이 인증서는 <b>중고차 판매 시, 구매자가 사고 이력을 확인</b>하기
          위한 대표적인 수단 중 하나입니다.
        </li>
        <li className="contents-text">
          <br />
          중고차를 구매하려는 경우에는 해당 차량의 사고 이력을 꼼꼼하게
          조사하고, 사고 유무 인증서 등을 확인하는 것이 중요합니다.
        </li>
      </ul>
    </div>
  );
};

export default accident;

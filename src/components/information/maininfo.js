import styled from "styled-components";
// 자동차 신차 보험에 관한 페이지

const MainBlock = styled.div`
    width:100%;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    padding: 1rem;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    .text {
        font-size: 60px;
        margin-left: 15px;
    }
    .lili {
        margin: 10px;
        margin-top: 20px;
        font-size: 15px;
        font-weight: 800;
    }
    .li_list {
        font-size: 22px;
        font-weight: 800;
        margin: 30px;
        margin-top: 50px;
    }
    .ul_list {
        margin: 30px;
        font-size:15px;
        font-weight: 800;
    }
    .div {
        margin-top: 80px;
    }
    .span {
        font-size: 18px;
    }
`

const maininfo = () => {
    return(
        <MainBlock>
            <div>
                <text className="text">자동차 정보/보험 정보</text>
            </div>
            <div className="div">
                <text className="lili">확인할 수 있는 정보</text>
                <ol>
                    <li className="li_list">자동차 정보</li>
                        <ul className="ul_list">연비</ul>
                        <ul className="ul_list">연료 종류</ul>
                        <ul className="ul_list">안전 기능</ul>
                        <ul className="ul_list">유지보수 비용, 보증 기간</ul>
                        <ul className="ul_list">사고 기록</ul>
                        <ul className="ul_list">부품</ul>
                    <li className="li_list">자동차 보험</li>
                        <ul className="ul_list">자동차 자차보험</ul>
                        <ul className="ul_list">자동차 종합보험</ul>
                        <ul className="ul_list">자동차 지키미보험</ul>
                        <ul className="ul_list">자동차 일반보험</ul>
                        <ul className="ul_list">자동차 할인보험</ul>
                        <ul className="ul_list">자동차 신차보험</ul>
                        <ul className="ul_list">자동차 중고차보험</ul>
                    <li className="li_list">자동차 옵션</li>
                        <ul className="ul_list">외장 옵션</ul>
                        <ul className="ul_list">내장 옵션</ul>
                        <ul className="ul_list">안전 옵션</ul>
                        <ul className="ul_list">편의 옵션</ul>
                        <ul className="ul_list">멀티 옵션</ul>
                    <li className="li_list">자동차 보험사 추천</li>
                        <ul className="ul_list">나이, 차종, 주행거리에 따른 보험사를 추천합니다.</ul>
                        <ul className="ul_list">선택한 나이, 차종, 주행거리에 알맞은 보험사와 종합적으로 가장 많이 
                        표시된 보험사를 최종적으로 추천합니다.</ul>
                        <ul className="ul_list">추천하는 보험의 데이터는 다이렉트 보험에 해당합니다.</ul>
                </ol>
            </div>
        </MainBlock>
    )
}

export default maininfo;
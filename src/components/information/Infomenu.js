import styled from "styled-components";
import { useState } from "react";

const InfomenuBlock = styled.div`
    width: 100%;
    padding: 1rem;
    background: red;
`
const InfomenuContent = styled.div`
    background: yellow;
    border-radius: 10px;
    width: 100%;
    height: 50rem;
    .InfoTag {
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 0; /* 패딩을 0으로 설정 */
        margin: 0; /* 마진을 0으로 설정 */
        margin-bottom: 1px;
        background: gray;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
        &:first-child {
            margin-top: 2px;
        }
        .text{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 15px;
            font-weight: 800;
            cursor: pointer;
        }
        .span {
            margin-left: 120px;
            font-size: 15px;
            font-weight: 800;
        }
    }
    .InfoTagContent {
        overflow: hidden;
        border-radius: 10px;
        max-height: 0;
        transition: max-height 0.2s ease-in-out;
        &.active {
            max-height: 20rem;
        }
        dd {
            border-radius: 10px;
            padding: 0 0.2rem;
            margin-top: 5px;
            margin-bottom: 15px;
            font-size: 15px;
            font-weight: 800;
            cursor: pointer;
            &:hover{
                color: orange;
            }
        }
    }
`;


const Infomenu = ({ onClick }) => {

    const [activeIndex1, setActiveIndex1] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const handleClick1 = (index) => {
        if (index === activeIndex1) {
          setActiveIndex1(null);
          
        } else {
          setActiveIndex1(index);
          
        }
    };

    const handleClick2 = (index) => {
        if (index === activeIndex2) {
          setActiveIndex2(null);
          
        } else {
          setActiveIndex2(index);
          
        }
    };

    return(
        <InfomenuBlock>
            <InfomenuContent>
                <div className="InfoTag">
                    <div className="text" onClick={() => handleClick1(0)}>
                        <span>자동차 정보</span>
                        <span className={`span ${activeIndex1 === 0 ? "on" : ""}`}>
                            {activeIndex1 === 0 ? "-" : "+"}
                        </span>
                    </div>
                    <div className={`InfoTagContent ${activeIndex1 === 0 ? "active" : ""}`}>
                        <dd onClick={() => onClick("gasmileage")}>연비</dd>
                        <dd onClick={() => onClick("oiltype")}>연료 종류</dd>
                        <dd onClick={() => onClick("safe")}>안전 기능</dd>
                        <dd onClick={() => onClick("maintenance")}>유지보수 비용, 보증 기간</dd>
                        <dd onClick={() => onClick("accident")}>사고 기록</dd>
                        <dd onClick={() => onClick("carpart")}>부품</dd>
                    </div>
                </div>
                <div className="InfoTag">
                    <div className="text" onClick={() => handleClick2(0)}>
                        <span>자동차 보험</span>
                        <span className={`span ${activeIndex2 === 0 ? "on" : ""}`}>
                            {activeIndex2 === 0 ? "-" : "+"}
                        </span>
                    </div>
                    <div className={`InfoTagContent ${activeIndex2 === 0 ? "active" : ""}`}>
                        <dd onClick={() => onClick("essential")}>자동차 자차보험(필수)</dd>
                        <dd onClick={() => onClick("synthesis")}>자동차 종합보험(선택)</dd>
                        <dd onClick={() => onClick("guard")}>자동차 지키미보험(선택)</dd>
                        <dd onClick={() => onClick("nomal")}>자동차 일반보험(선택)</dd>
                        <dd onClick={() => onClick("sale")}>자동차 할인보험(선택)</dd>
                        <dd onClick={() => onClick("newcar")}>자동차 신차보험(선택)</dd>
                        <dd onClick={() => onClick("oldcar")}>자동차 중고차보험(선택)</dd>
                    </div>
                </div>
                <div className="InfoTag" onClick={() => onClick("choose")}>      
                    <text className="text">자동차 보험 추천</text>     
                </div>    
            </InfomenuContent>
        </InfomenuBlock>  
    )
}

export default Infomenu;
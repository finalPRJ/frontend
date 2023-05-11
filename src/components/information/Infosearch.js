import styled from "styled-components";
import Infomenu from "./Infomenu";
import { useState } from "react";

import Maininfo from "./maininfo";                  // 자동차/보험 페이지 이동 시 보여질 화면
import Choose from "./choose";

// 자동차 정보 페이지들
import Gasmileage from "./carinfo/gasmileage";      // 연비 페이지
import Oiltype from "./carinfo/oiltype";            // 연료 타입 페이지
import Safe from "./carinfo/safe";                  // 안전 기능 페이지
import Maintenance from "./carinfo/maintenance";    // 유지보수, 보증기간 페이지
import Accident from "./carinfo/accident";          // 사고기록 페이지
import Carpart from "./carinfo/carpart";            // 부품 페이지

// 자동차 보험 페이지들
import Essential from "./carinsurance/essential";   // 자동차 자차 보험 페이지
import Synthesis from "./carinsurance/synthesis";   // 자동차 종합 보험 페이지
import Guard from "./carinsurance/guard";           // 자동차 지키미 보험 페이지
import Nomal from "./carinsurance/normal";          // 자동차 일반 보험 페이지
import Sale from "./carinsurance/sale";             // 자동차 할인 보험 페이지
import Newcar from "./carinsurance/newcar";         // 자동차 신차 보험 페이지
import Oldcar from "./carinsurance/oldcar";         // 자동차 중고차 보험 페이지

// 자동차 옵션 페이지들
import External from "./options/External";
import Internal from "./options/Internal";
import Safe2 from "./options/Safe";
import Conven from "./options/Conven";
import Multi from "./options/Multi";


const InfosearchBlock = styled.div`
    width: 100%;
`

const InfoSearchContent = styled.div`
    width: 1280px;
    display: flex;
    margin: auto;
    margin-top: 68px;
    padding: 2rem;
    .menuBlock {
        width: 280px;
        float: left;
        box-sizing: border-box;
        background: white;
    }
    .contentBlock {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        width: 1000px;
        float: right;
        box-sizing: border-box;
        background: white;
    }
`

const Infosearch = () => {
    const [selectedPage, setSelectedPage] = useState("");

    const PageSelect = (pageName) => {
    setSelectedPage(pageName);
    };

    return (
        <InfosearchBlock>
            <InfoSearchContent>
                <div className="menuBlock">
                <Infomenu onClick={PageSelect}/>
                </div>
                <div className="contentBlock">
                    {selectedPage === "" && <Maininfo/>}
                    {selectedPage === "gasmileage" && <Gasmileage />}
                    {selectedPage === "oiltype" && <Oiltype />}
                    {selectedPage === "safe" && <Safe />}
                    {selectedPage === "maintenance" && <Maintenance />}
                    {selectedPage === "accident" && <Accident />}
                    {selectedPage === "carpart" && <Carpart />}
                    {selectedPage === "essential" && <Essential />}
                    {selectedPage === "synthesis" && <Synthesis />}
                    {selectedPage === "guard" && <Guard />}
                    {selectedPage === "nomal" && <Nomal />}
                    {selectedPage === "sale" && <Sale />}
                    {selectedPage === "newcar" && <Newcar />}
                    {selectedPage === "oldcar" && <Oldcar />}
                    {selectedPage === "choose" && <Choose />}

                    {selectedPage === "external" && <External />}
                    {selectedPage === "internal" && <Internal />}
                    {selectedPage === "safe2" && <Safe2 />}
                    {selectedPage === "conven" && <Conven />}
                    {selectedPage === "multi" && <Multi />}
                </div>
            </InfoSearchContent>
        </InfosearchBlock>
    )
}

export default Infosearch;
import styled from "styled-components";
import Carcard from "./Carcard";

const CarsearchBlock = styled.div`
    width: 100%;
    background: red;
    z-index: 1;
`;

const CarSearchContent = styled.div`
    width: 1280px;
    display: flex;
    background: yellowgreen;
    margin: auto;
    padding: 2rem;
    .menuBlock {
        width: 280px;
        float: left;
        box-sizing: border-box;
        background: pink;
    }
    
    .contentBlock {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        width: 1000px;
        float: right;
        box-sizing: border-box;
        background: violet;
    }
`

const Carsearch = () => {
    return (
        <CarsearchBlock>
            <CarSearchContent>
                <div className="menuBlock">
                    메뉴 입갤
                </div>
                <div className="contentBlock">
                    <Carcard/>
                    <Carcard/>
                    <Carcard/>
                    <Carcard/>
                    <Carcard/>
                    <Carcard/>
                    <Carcard/>
                    <Carcard/>
                </div>
            </CarSearchContent>
        </CarsearchBlock>
    )
}

export default Carsearch;
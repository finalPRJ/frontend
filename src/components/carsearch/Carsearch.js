import styled from "styled-components";
import Carcard from "./Carcard";
import Carmenu from "./Carmenu";

const CarsearchBlock = styled.div`
    width: 100%;
`;

const CarSearchContent = styled.div`
    width: 1280px;
    display: flex;
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
                    <Carmenu/>
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
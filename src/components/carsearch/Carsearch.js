import styled from "styled-components";
import Carcard from "./Carcard";

const CarsearchBlock = styled.div`
    position: fixed;
    width: 100%;
    background: red;
    overflow: auto;
`;

const CarSearchContent = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;;
    background: yellowgreen;
    margin: auto;
    padding: 2rem;
`

const Carsearch = () => {
    return (
        <CarsearchBlock>
            <CarSearchContent>
                <Carcard/>
                <Carcard/>
                <Carcard/>
                <Carcard/>
                <Carcard/>
                <Carcard/>
                <Carcard/>
                <Carcard/>
            </CarSearchContent>
        </CarsearchBlock>
    )
}

export default Carsearch;
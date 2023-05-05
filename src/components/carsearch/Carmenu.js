import { Link } from "react-router-dom";
import styled from "styled-components";

const CarmenuBlock = styled.div`
    width: 100%;
    padding: 1rem;
    background: red;
`

const CarmenuContent = styled.div`
    background: yellow;
    border-radius: 10px;
    width: 100%;
    height: 50rem;
    .SearchTag {
        display: flex;
        width: 100%;
        height: 50px;
        padding: 0; /* 패딩을 0으로 설정 */
        margin: 0; /* 마진을 0으로 설정 */
        background: green;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        align-items: center;
        justify-content: space-between;
        .list {
            flex: 1;
            display: inline;
            font-size: 15px;
            font-weight: 800;
            text-align: center;
            text-decoration: underline;
        }
    }
`;


const Carmenu = ({handleChangeFilters}) => {

    return(
        <CarmenuBlock>
            <CarmenuContent>
                <ul className="SearchTag">
                    <li className="list">
                        <Link to="/carsearch"
                            onClick={() => handleChangeFilters({})}>전체</Link>
                    </li>
                    <li className="list">
                        <Link to="/carsearch"
                            onClick={() => handleChangeFilters({legion: '국산'})}>국산</Link>
                    </li>
                    <li className="list">
                        <Link to="/carsearch"
                            onClick={() => handleChangeFilters({legion: '수입'})}>수입</Link></li>
                </ul>
            </CarmenuContent>
        </CarmenuBlock>
    )
}

export default Carmenu;
import styled from "styled-components";

const CarcardBlock = styled.div`
    width: 200px;
    height: 15rem;
    background: blue;
    margin: 2rem;
    padding: 0.5rem;
    img {
        margin: 0 auto;
        width: 100%;
        height: 40%;
        background: yellow;

    }

`;

const CardTextForm = styled.div`
    width: 100%;
    height: 60%;
    padding: 0.5rem;
    background: yellow;
`

const Carcard = () => {
    return (
        <CarcardBlock>
            <img src={require("../../lib/image/sadcat.jpg")} alt="sadcat"/>
            <CardTextForm/>
        </CarcardBlock>
    )
}

export default Carcard;
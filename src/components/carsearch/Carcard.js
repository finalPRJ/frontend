import styled from "styled-components";

const CarcardBlock = styled.div`
    border-radius: 20px;
    width: 200px;
    height: 20rem;
    background: blue;
    margin: 2rem;
    padding: 0.5rem;
    img {
        margin: 0 auto;
        width: 100%;
        height: 35%;
        background: yellow;

    }

`;

const CardTextForm = styled.div`
    width: 100%;
    height: 65%;
    padding: 0.5rem;
    background: yellow;
    .name {
        font-size: 18px;
        font-weight: 800;
        height: 30%;
        background: white;
    }
    .ex {
        font-size: 12px;
        
    }
`

const Carcard = () => {
    return (
        <CarcardBlock>
            <img src={require("../../lib/image/sadcat.jpg")} alt="sadcat"/>
            <CardTextForm>
                <div className="name">
                    카카카<br/>
                    야야야
                </div>
                <hr/>
                <div>
                    2020년 <br/>
                    50,000km | 인천
                    <br/>  
                    1,880만원 
                </div>
            </CardTextForm>
        </CarcardBlock>
    )
}

export default Carcard;
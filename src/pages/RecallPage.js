import HeaderContainer from "../containers/common/HeaderContainer";
import styled from "styled-components";

// const recallView = styled.div`
    // width: 100%;
// `

const recallMenu = styled.div`
ul.recall {
        list-style: none;
        display: flex;
        flex-direction: row;
    }
.recallText {

}
`

const ReCallPage = () => {
    return (
        <div>
            <HeaderContainer/>
                <recallMenu>
                    <ul className="recall">
                        <li className="recallText">하위 Top 3</li>
                        <li className="recallText">상위 Top 3</li>
                    </ul>
                </recallMenu>
        </div>
    )
}

export default ReCallPage;
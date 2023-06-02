import styled from "styled-components";

const ReadBlock = styled.div`
    width: 100%;
`
const ReadContent = styled.div`
    width: 1280px;
    height: 120rem;
    display: flex;
    margin: 68px auto;
    padding: 2rem;
    .contentBlock {
        display: flex;
        width: 1400px;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }
    .div {
        margin-top: 30px auto;
        width: 850px;
        height: 800px;
        border-width: 1px;
        border-style: solid;
        background: yellow;
    }
    .div2 {
        margin-top: 10px auto;
        width: 850px;
        height: 800px;
        border-width: 1px;
        border-style: solid;
        background: yellow;
    }
    .head {
        margin: 10px;
        display: flex;
        padding: 15px;
        font-weight: bold;
        background: skyblue;
        border-radius: 20px;
        font-size: 20px;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .body {
        margin: 10px;
        height:75%;
        overflow: hidden;
    }
    .text {
        outline: none;
        padding: 10px;
        resize: none;
        width: 100%;
        height: 100%;
        font-size:18px;
    }
    .button {
        text-align: center;
        margin: 10px auto;
        padding: 10px;
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        background: skyblue;
        width: 180px;
        font-size:20px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
    .span {
        width: 100%;
        flex-flow: row nowrap;
        display: flex; 
        align-items: center; 
    }
    .a {
        margin-left: 20px;
        color: #616161;
        text-decoration: underline;
    }
    .modifybutton {
        margin-left: 71%;
        width:80px;
        padding: 2px;
        background: skyblue;
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
    .deletebutton {
        margin-left: 10px;
        width:80px;
        padding: 2px;
        background: skyblue;
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
    .text2 {
        margin-top: 20px;
        margin-left: 20px;
        font-size: 20px;
        width: 85%;
        height: 60px;
        resize: none;
    }
    .submitbutton {
        padding: 18px;
        margin-top: 20px;
        margin-left: 15px;
        background: skyblue;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
    .reply {
        margin: 10px auto;
        padding: 5px;
        width: 800px;
        background: white;
    }
    .name {
        font-size: 20px;
    }
    .content {
        font-size: 15px;
    }
    .reply_modify {
        margin-left: 650px;
        font-size: 15px;
        text-decoration: underline;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
    .reply_delete {
        margin-left: 10px;
        font-size: 15px;
        text-decoration: underline;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
`

const ReadContainer = () => {
    return (
        <ReadBlock>
            <ReadContent>
                <div className="contentBlock">
                    <div className="div">
                        <div className="head">
                            <text>강태영</text>
                            <text>2023-05-20</text>
                            <text>댓글 수 : 6</text>
                        </div>
                        <div className="body">
                            <textarea className="text" readOnly></textarea>
                        </div>
                        <div className="button">
                            <text>옵션 목록</text>
                        </div>
                        <span className="span">
                            <a className="a" href="http://localhost:3000/board/view/*">
                                목록
                            </a>
                            <div className="modifybutton">
                                수정
                            </div>
                            <div className="deletebutton">
                                삭제
                            </div>
                        </span>
                    </div>
                    <div className="div2">
                        <span className="span">
                            <textarea className="text2"></textarea>
                            <div className="submitbutton">등록</div>
                        </span>
                        <div className="reply">

                            <div>
                                <span className="span">
                                    <strong className="name">강태영</strong>
                                    <div className="reply_modify">수정</div>
                                    <div className="reply_delete">삭제</div>
                                </span>
                                <div className="content">ㅇㅇㅇㅇㅇ</div>
                                <hr/>
                            </div>

                            <div>
                                <span className="span">
                                    <strong className="name">강태영</strong>
                                    <div className="reply_modify">수정</div>
                                    <div className="reply_delete">삭제</div>
                                </span>
                                <div className="content">ㅇㅇㅇㅇㅇ</div>
                                <hr/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </ReadContent>
        </ReadBlock>
    )
}

export default ReadContainer;
import styled from "styled-components";
import BoardComboBox from "./BoardComboBox";

const BoardBlock = styled.div`
    width: 100%;
`

const BoardContent = styled.div`
    background: white;
    width: 1280px;
    height: 100rem;
    display: flex;
    margin: auto;
    margin-top: 68px;
    padding: 2rem;
    .contentBlock {
        display: flex;
        width: 1400px;
        box-sizing: border-box;
        background: white;
    }
    .div {
        margin-top: 50px;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 50px;
        width: 100%;
        text-align: center;
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        background: yellow;
    }
    .text {
        font-size: 60px;
    }
    .table {
        border: 1px solid lightgrey;
        width: 850px;
        margin: 15px auto;
        font-size: 20px;
        text-align: center;
    }
    th {
        background-color: lightgray;
    }
    td {
        background-color: white;
    }
    .div2 {
        display: flex;
        align-items: flex-start; 
        width: 820px;
        height: 100px;
        margin-top: 50px;
        margin-left: 150px;
        border-radius: 10px;
    }
    .input{
        margin-left: 10px;
        width: 250px;
        font-size: 18px;
        
    }
    .button {
        width:80px;
        background: green;
        margin-left: 10px;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        font-size: 20px;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
    .button2 {
        width:100px;
        background: green;
        margin-left: 160px;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        font-size: 20px;
        cursor: pointer;
        &:hover{
                color: orange;
        }
    }
`

const OPTIONS = [
	{ value: "t:", name: "제목" },
	{ value: "W:", name: "작성자" },
	{ value: "c:", name: "내용" },
];

const BoardContainer = () => {
   return(
        <BoardBlock>
            <BoardContent>
                <div className="contentBlock">
                    <div className="div">
                        <text className="text">리스 게시판</text>
                        <div className="div2">
                            <BoardComboBox options={OPTIONS} defaultValue="t:"></BoardComboBox>
                            <input className="input"></input>
                            <div class = "button" /*onClick={}*/>
                                검색
                            </div>
                            <div class = "button2" /*onClick={}*/>
                                글 작성
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>댓글 수</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>hiiiiiiiiiiiiii1</td>
                                    <td>0</td>
                                    <td>UUSS3</td>
                                    <td>2023-05-13</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>hi2</td>
                                    <td>3</td>
                                    <td>UUSS2</td>
                                    <td>2023-05-13</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>hi3</td>
                                    <td>1</td>
                                    <td>UUSS1</td>
                                    <td>2023-05-13</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </BoardContent>
        </BoardBlock>
   )
}

export default BoardContainer;
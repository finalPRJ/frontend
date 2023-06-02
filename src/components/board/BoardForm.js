import styled from "styled-components";
import BoardComboBox from "./BoardComboBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
	{ value: "w:", name: "작성자" },
	{ value: "c:", name: "내용" },
];

const BoardItem = ({boards}) => {

    /**날짜 데이터 포맷*/
    const formatDateTime = (dateTime) => {
        const formattedDateTime = new Date(dateTime).toLocaleString([], {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
        return formattedDateTime;
    };

    return (
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
                {
                    boards.data.dtoList.map(board => (
                        <tr key={board.bno}>
                            <td><Link to = {`/board/read?bno=${board.bno}`}>{board.bno}</Link></td>
                            <td><Link to = {`/board/read?bno=${board.bno}`}>{board.title}</Link></td>
                            <td>{board.replyCount}</td>
                            <td>{board.writerNickname}</td>
                            <td>{formatDateTime(board.createtime)}</td>
                        </tr>
                    
                    ))
                }
            </tbody>
        </table>
    )
}

const BoardForm = ({ boards, error, changeBtypeField }) => {

   const navigate = useNavigate();
   const [menu,setMenu] = useState('t:');
   const [menuInput,setMenuInput] = useState('');

   const handleOnKeyPress = e => {
    if(e.key === 'Enter') {
        e.preventDefault();
        changeBtypeField({
            menu: menu,
            input: menuInput
        })
        setMenuInput('');
    }
   }

   if (error) {
    return <BoardBlock>에러가 발생했습니다.</BoardBlock>;
  }

   return(
        <BoardBlock>
            <BoardContent>
                <div className="contentBlock">
                    <div className="div">
                        <text className="text">커뮤니티</text>
                        <div className="div2">
                            <BoardComboBox 
                                options={OPTIONS} 
                                defaultValue={menu}
                                setMenu={setMenu}      
                            />
                            <input 
                                className="input"
                                value={menuInput}
                                onChange={(e) => setMenuInput(e.target.value)}
                                onkeypress={handleOnKeyPress}
                            />
                            <div 
                                class = "button" 
                                onClick={() => changeBtypeField({
                                    menu: menu,
                                    input: menuInput
                                })}>
                                검색
                            </div>
                            <div
                                class = "button2" 
                                onClick={() => {
                                    navigate('/write');
                                }}
                            >
                                글 작성
                            </div>
                        </div>
                        {boards && (
                            <BoardItem boards={boards} />
                        )}

                    </div>
                </div>
            </BoardContent>
        </BoardBlock>
   )
}

export default BoardForm;
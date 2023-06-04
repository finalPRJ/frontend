import { useState } from "react";
import styled from "styled-components";
import AskRemoveModal from "./AskRemoveModal";

const ReadBlock = styled.div`
    width: 100%;
`
const ReadContent = styled.div`
  width: 1280px;
  display: flex;
  margin: 68px auto;
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
    min-height: 800px;
    border-width: 1px;
    border-style: solid;
    background: yellow;
    display: flex;
    flex-direction: column; 
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
    flex: 1; 
    overflow-y: auto; 
    background: white;
  }
  .text {
    outline: none;
    padding: 10px;
    resize: none;
    width: 100%;
    height: 100%;
    font-size: 18px;
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
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
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
  .deletebutton {
    margin-left: 10px;
    width: 80px;
    padding: 2px;
    background: skyblue;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
  .modifybutton {
    margin-left: 71%;
    width: 80px;
    padding: 2px;
    background: skyblue;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
`;

const ReadForm = ({ board, loading, error ,user , onEdit, onRemove }) => {

    const [modal,setModal] = useState(false);
    const onRemoveClick = () => {
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        setModal(false);
        onRemove();
    }

    if(error) {
        if (error.response && error.response.status === 404) {
            return <ReadBlock>존재하지 않는 게시물입니다.</ReadBlock>
        }
        return <ReadBlock>오류 발생</ReadBlock>
    }

    if(loading || !board) {
        return null;
    }

    return (
        <>
            <ReadBlock>
                <ReadContent>
                    <div className="contentBlock">
                        <div className="div">
                            <div className="head">
                                <text>{board.writerNickname}</text>
                                <text>{board.title}</text>
                                <text>댓글 수 : {board.replyCount}</text>
                            </div>
                            <div className="body">
                                <div
                                className="text"
                                dangerouslySetInnerHTML={{ __html: board.content }}
                                />
                            </div>
                            <div className="button">
                                <text>옵션 목록</text>
                            </div>
                            <span className="span">
                                <a className="a" href="/boardlist">
                                    목록
                                </a>
                                {user && user.id === board.id && <div className="modifybutton" onClick={onEdit}>수정</div>}
                                {user && user.id === board.id && <div className="deletebutton" onClick={onRemoveClick}>삭제</div>}
                            </span>
                        </div>
                    </div>
                </ReadContent>
            </ReadBlock>
            <AskRemoveModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
    )
}

export default ReadForm;
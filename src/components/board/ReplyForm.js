import { useState } from "react"
import styled from "styled-components"

const ReplyBlock = styled.div`
    width: 100%;
`

const ReplyContent = styled.div`
    width: 1280px;
    display: flex;
    margin: 0px auto;
    
    .contentBlock {
        display: flex;
        width: 1400px;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }
    .div2 {
        margin-top: 10px auto;
        width: 850px;
        height: 800px;
        border-width: 1px;
        border-style: solid;
        background: yellow;
    }
    .span {
        width: 100%;
        flex-flow: row nowrap;
        display: flex; 
        align-items: center; 
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
    .content {
        border: none;
        font-size: 15px;
        &:focus{
            outline: none;
        }
    }
`

const ReplyBox = ({ reply, user, onRemove, handleModify }) => {
  const [content, setContent] = useState(reply.content);
  const [onModify, setOnModify] = useState(true);

  const handleModifyState = () => {
    setOnModify(!onModify);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <span className="span">
        <strong className="name">{reply.replyerNickname}</strong>
        {reply.id === user.id && (
          <>
            {onModify ? (
              <div className="reply_modify" onClick={handleModifyState}>
                수정
              </div>
            ) : (
              <div
                className="reply_modify"
                onClick={() => {
                  handleModifyState();
                  handleModify({ rno: reply.rno, content: content });
                }}
              >
                완료
              </div>
            )}
            <div className="reply_delete" onClick={() => onRemove(reply.rno)}>
              삭제
            </div>
          </>
        )}
      </span>
      <input
        className="content"
        value={content}
        disabled={onModify}
        onChange={handleInputChange}
      />
      <hr />
    </div>
  );
};


const ReplyForm = ({ replys, error, loading, user, handleSubmit, onRemove, handleModify }) => {

    const [content,setContent] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(content); // handleSubmit 함수에 content 값을 전달하여 호출
        setContent(''); // 등록 후에 textarea 내용 초기화
    };

    return (
        <ReplyBlock>
            <ReplyContent>
                <div className="contentBlock">
                    <div className="div2">
                        <form className="span" onSubmit={onSubmit}>
                            <textarea 
                                className = "text2" 
                                onChange={(e) => setContent(e.target.value)}
                                name = 'bno'
                                value = {content}
                            />
                            <button className="submitbutton">등록</button>
                        </form>
                        <div className="reply">
                            {replys && user && replys.map((reply) => (
                                <ReplyBox
                                    key = {reply.rno}
                                    reply = {reply}
                                    user = {user}
                                    onRemove = {onRemove}
                                    handleModify = {handleModify}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ReplyContent>
        </ReplyBlock>
    )
}

export default ReplyForm;
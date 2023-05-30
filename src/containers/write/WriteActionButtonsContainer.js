import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { writerId, title, content, options1, options2, options3, options4, options5, post, postError } = useSelector(({ write, user }) => ({
    writerId: user.user,
    title: write.title,
    content: write.content,
    options1: write.options1,
    options2: write.options2,
    options3: write.options3,
    options4: write.options4,
    options5: write.options5,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    const params = {
      writerId: writerId,
      title: title,
      content: content,
      options1: options1,
      options2: options2,
      options3: options3,
      options4: options4,
      options5: options5,
    }
    dispatch(writePost(params));
  };

  // 취소
  const onCancel = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => { //post의 변화에 따라 navigate 수정
    if (post) {
      navigate(`/board/View/${post}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
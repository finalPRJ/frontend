
import { useEffect } from "react";
import ReadForm from "../../components/board/ReadForm";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readBoard, unloadBoard } from "../../modules/board";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { setOriginalBoard } from "../../modules/write";


const BoardReadContainer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();;
    const searchParams = new URLSearchParams(location.search);
    const bno = searchParams.get("bno");

    const { board , error, loading , user} = useSelector(
      ({board, loading, user}) => ({
        board : board.board,
        error: board.error,
        loading: loading['board/READ_BOARD'],
        user : user.currentUser
      }))

    const onEdit = () => {
      dispatch(setOriginalBoard(board));
      navigate('/write');
    }


    useEffect(() => {
        console.log(bno)
        if (bno) {
          dispatch(readBoard(bno));
          return() => {
            dispatch(unloadBoard());
          }
        }
      }, [bno, dispatch]);


    return(
        <ReadForm
          board = {board}
          loading = {loading}
          error = {error}
          user = {user}
          onEdit = {onEdit}
        />
    )
};

export default BoardReadContainer;
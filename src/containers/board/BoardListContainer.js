import { useDispatch, useSelector } from "react-redux";
import BoardForm from "../../components/board/BoardForm";
import { useEffect } from "react";
import { boardsChangeField, listBoards } from "../../modules/boards";



const BoardListContainer = () => {

    const dispatch = useDispatch();

    const { boards, loading, error, bTypefilter} = useSelector(
        ({ boards, loading }) => ({
            boards: boards.boards,
            error: boards.error,
            loading: loading['boards/LIST_BOARDS'],
            bTypefilter: boards.bTypefilter,
        }),
    )
    
    const changeBtypeField = (filterObj) => {
        const updatedFilters = { ...bTypefilter, ...filterObj };
        dispatch(boardsChangeField(updatedFilters));
        dispatch(listBoards());
    }

    useEffect(() => {
        dispatch(listBoards());
    },[dispatch])

    return(
        <BoardForm
            changeBtypeField = {changeBtypeField}
            boards = {boards}
            loading = {loading}
            error = {error}
        />
    )
}

export default BoardListContainer;
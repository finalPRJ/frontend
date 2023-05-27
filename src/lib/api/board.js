import client from "./client"

export const listboards = (params) => {
    return client.get('/board/list',{params});
}

export const readBoard = ({bno}) => client.get(`/board/read?bno=${bno}`);
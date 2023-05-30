import client from "./client";

export const carList = (params) => client.get('/car/list', { params });

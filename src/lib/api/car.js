import client from "./client";

export const carinfo = () => client.get('/car/list')
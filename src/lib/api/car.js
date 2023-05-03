import client from "./client";

export const carList = () => client.get('http://192.168.1.6:8070/car/list')


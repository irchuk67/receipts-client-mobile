import axios from "axios";

const baseURL = 'https://receipts-server.herokuapp.com/api/receipts';
const Receipts = axios.create({
    baseURL
});

const getReceipts = async () => await Receipts.get('/');

export {getReceipts}
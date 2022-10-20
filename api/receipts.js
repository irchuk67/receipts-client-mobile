import axios from "axios";

const baseURL = 'https://receipts-server.herokuapp.com/api';
const baseLocalhost = 'http://localhost:8000/api';

const Server = axios.create({
    baseURL: baseURL
});

const getReceipts = async () => await Server.get('/receipts');
const getReceiptById = async (id) => await Server.get(`/receipts/${id}`);
const deleteReceiptById = async (id) => {
    console.log(id);
    const result = await Server.delete(`/receipts/${id}`);
    console.log(result)
    return result
}
const createReceipt = async (text) => await Server.post('/receipts', {text: text});
const updateReceipt = async (id, text) =>await Server.put(`/receipts/${id}`, {text: text})


export {getReceipts, deleteReceiptById, getReceiptById, createReceipt, updateReceipt}
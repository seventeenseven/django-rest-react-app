import axios from "axios";

const base_url = 'http://127.0.0.1:8000/api/employes/';

//const calculate = (a, b) => a+b; //Synchronous
export const getEmployes = async () => {
    const response  = await axios.get(base_url);
    return response.data ;
}
export const getEmployeById = async (id) => {
    const response = await axios.get(`${base_url}${id}/`);
    return response.data;
};

export const createEmploye = async (employe) => {
    const response = await axios.post(base_url, employe);
    return response.data;
};
export const deleteEmploye = async (id) => {
    await axios.delete(`${base_url}${id}/`);
};
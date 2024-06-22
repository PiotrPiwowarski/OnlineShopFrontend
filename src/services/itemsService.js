import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/items'

export const  getAllItems = () => {
    return axios.get(BASE_URL + '/all');
}
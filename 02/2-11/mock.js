import axios from "axios";

export const runCallback = (callback) => {
    callback('abc');
}

export const createObject = (classItem) => {
    new classItem();
}

export const getData = () => {
    return axios.get('/api');
}

export const getData3 = () => {
    return axios.get('/api');
}
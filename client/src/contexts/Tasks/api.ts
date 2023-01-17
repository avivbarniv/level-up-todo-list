import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tasks';

export const getById = async (id: string) => {
    const { data } = await axios.get(BASE_URL + '/' + id);
    return data;
}

export const create = async (title: string) => {
    const { data } = await axios.post(BASE_URL, {
        title
    });
    return data;
}

export const getAll = async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
}
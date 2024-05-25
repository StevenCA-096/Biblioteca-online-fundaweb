import { api } from "../axios/api";

export const getBooks = async() => {
    let data = (await api.get('books')).data
    console.log(data)
    return data;
}
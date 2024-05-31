import { api } from "../axios/api";

export const getBooks = async() => {
    let data = (await api.get('books')).data
    console.log(data)
    return data;
}

export const createBooks = async(newBooks) => {
    let data = await api.post('books',newBooks).then(data => data.data)

    return data;
}
import { api } from "../axios/api"

export const customerLogin = async(credential) => {
    let data = (await api.post('auth', credential)).data
    console.log(data)
    return data;
}
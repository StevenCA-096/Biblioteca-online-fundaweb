import { api } from "../axios/api";

export const getCostumers = async() => {
    let data = (await api.get('costumers')).data
    console.log(data)
    return data;
}

export const createCostumers = async(newCostumers) => {
    let data = await api.post('costumers',newCostumers).then(data => data.data)

    return data;
}
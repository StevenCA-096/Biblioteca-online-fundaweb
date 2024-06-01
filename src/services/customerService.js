import { api } from "../axios/api";

export const createCustomer = async(newCostumer) => {
    let data = (await api.post('costumers', newCostumer)).data
    return data;
}

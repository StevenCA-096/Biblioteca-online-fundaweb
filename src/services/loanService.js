import { api } from "../axios/api";

export const createLoan = async(newLoan) => {
    let data = (await api.post('loans', newLoan)).data
    console.log(data)
    return data
}

export const updateLoan = async(updateLoanData) => {
    let data = (await api.patch(`loans/update-loan-date/${parseInt(updateLoanData.id)}/${updateLoanData.newDate}`)).data
    return data;
}

export const getCustomerLoans = async(idCustomer) => {
    let data = (await api.get(`loans/get-customer-loans/${idCustomer}`)).data
    return data
}
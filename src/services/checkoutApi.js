import axios from "axios"
import { apiUrl } from "./apiurl"


export const createOrder = async (body) => {
    const response = await axios.post(apiUrl + "checkout", body)
    return response

}

export const modifyOrder = async (body) => {
    const response = await axios.put(apiUrl + "checkout", body)
    return response

}




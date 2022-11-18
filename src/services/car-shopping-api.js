import axios from "axios"
import { apiUrl } from "./apiurl"


export const addProductToCart = async (product) => {
    const response = await axios.post(apiUrl + "cart", product)
    return response
}

export const getProductToCart = async () => {
    const response = await axios.get(apiUrl + "cart")
    return response
}

export const deleteProductToCart = async (productId) => {
    const response = await axios.delete(apiUrl + "cart", { data: productId })
    return response

}

export const deleteCart = async () => {
    const response = await axios.delete(apiUrl + "cart/delete")
    return response

}


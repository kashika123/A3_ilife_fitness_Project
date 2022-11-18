import axios from "axios"
import { apiUrl } from "./apiurl"


export const fetchAllProducts = async () => {
    const response = await axios.get(apiUrl + "product")
    return response

}


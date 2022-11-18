import axios from "axios"
import { apiUrl } from "./apiurl"


export const fetchAllCategory = async () => {
    const response = await axios.get(apiUrl + "category")
    return response

}


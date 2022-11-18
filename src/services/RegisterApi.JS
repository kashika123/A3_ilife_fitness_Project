

import axios from "axios"
import { apiUrl } from "./apiurl"

const createAccount = async (credentials) => {
    const response = await axios.post(apiUrl + "user", credentials)
    return response

}

export { createAccount }

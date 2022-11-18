import axios from "axios"
import { apiUrl } from "./apiurl"

const setLogin = async (credentials) => {
    console.log('login in ->', credentials)
    const response = await axios.post(apiUrl + "auth/signin", credentials, {
        headers: {
            withCredentials: true,
        }
    })
    return response

}



export { setLogin }

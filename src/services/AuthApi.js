import axios from 'axios'
import jwtDecode from 'jwt-decode'



const setup = () => {

    const token = localStorage.getItem('token')

    if (token) {
        const jwtData = jwtDecode(token)

        if (jwtData.exp > new Date().getTime() / 1000) {
            axios.defaults.headers['Authorization'] = 'Bearer ' + token
            localStorage.setItem("userLogged", true)
            return { authenticatedStatus: true }
        } else {
            localStorage.setItem("userLogged", false)
            return { authenticatedStatus: false }
        }
    } else {
        localStorage.setItem("userLogged", false)
        return { authenticatedStatus: false }
    }
}

export { setup }
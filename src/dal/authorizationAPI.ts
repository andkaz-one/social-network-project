import axios from "axios"


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true

})



export const authorizationAPI = {
    getAuth() {
        return instance.get('auth/me')
    }
}
import axios from 'axios';


// creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5500",

    withCredentials: true,
    header: {
        "Content-Type": "application/json"
    }
})

// Test API
export const testApi = () => Api.get('/test')

// register Api
export const registerUserApi = (data) => Api.post('/api/user/create', data)

// http://localhost:3000/test
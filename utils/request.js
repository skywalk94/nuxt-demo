import axios from "axios"

const service = axios.create({
    baseURL: "https://api.github.com",
    timeout: 10000,
})

service.interceptors.request.use(
    config => {
        // 模拟用户登录后携带登录信息
        const token = process.client ? useCookie("token") : {}
        token.value = "userToken"
        config.headers.Authorization = token.value
        return config
    },
    error => {
        return Promise.error(error)
    }
)

service.interceptors.response.use(
    success => {
        return Promise.resolve(success)
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
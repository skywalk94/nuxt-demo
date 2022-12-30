const fetchConfig = {
    baseURL: "https://api.github.com"
}

export default async (url, options = {}) => {
    options = { ...fetchConfig, ...options }
    const res = await useFetch(url, {
        ...options,
        onRequest({ options }) {
            options.headers = options.headers || {}
            const token = useCookie("token")
            token.value = "0123456789" //模拟用户登录完成后获取token
            if (token.value) {
                options.headers.authorization = token.value
            }
        },
        onRequestError(err) {
            // 处理请求前失败回调
        },
        onResponse(res) {
            // 处理请求成功回调
        },
        onResponseError(err) {
            // 处理请求后失败回调
        }
    })
    return res
}
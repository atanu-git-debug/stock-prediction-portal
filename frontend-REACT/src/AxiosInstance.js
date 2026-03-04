import axios from "axios";



const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const AxiosInstance = axios.create(
    {
        baseURL:baseURL,
        headers:{
            'Content-Type':'application/json',
        }
    }
)


// Request interseptor
AxiosInstance.interceptors.request.use(

    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
)

// Response Interseptor
AxiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    // Handel faild responses
    async function(error){
        const originalRequest = error.config
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry=true
            const refreshToken = localStorage.getItem('refreshToken')
            try {
                const response = await AxiosInstance.post('/token/refresh/',{
                    refresh:refreshToken
                })
                
                localStorage.setItem('accessToken',response.data.access)                
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return AxiosInstance(originalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                
            }
        }
        return Promise.reject(error)
    }
)
export default AxiosInstance
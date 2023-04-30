// 引入axios：
import axios, { AxiosResponse } from 'axios'

// 使用axios里的create([config])创建axios实例，config为基础配置信息：
export const http = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL, // 导入环境变量
	timeout: 5000, // 请求超时设置，单位ms
})

// 拦截配置：
http.interceptors.response.use((response: AxiosResponse<any, any>) => {
	if (response.status == 200) {
		return response.data
	}
})

// 导出axios实例模块：
export default http

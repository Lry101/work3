import type { App } from 'vue'
import router from '../router'
import axios from './axios'
import { AxiosInstance } from 'axios'

// 定义运行时的方法函数：
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$http: AxiosInstance
	}
}

export default {
	install(app: App) {
		app.use(router)
		app.config.globalProperties.$http = axios
		this.mixins(app)
	},
	mixins(app: App) {
		app.mixin({})
	},
}

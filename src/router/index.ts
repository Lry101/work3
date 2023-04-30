// 引入并配置路由：
import { createRouter, createMemoryHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []
const router = createRouter({
	history: createMemoryHistory(import.meta.env.BASE_URL),
	routes,
})

export default router

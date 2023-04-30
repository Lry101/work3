import type { App } from 'vue'
import router from '../router'

export default {
	install(app: App) {
		app.use(router)
		this.mixins(app)
	},
	mixins(app: App) {
		app.mixin({})
	},
}

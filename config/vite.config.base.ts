import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// arco组件库按需加载插件：
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

// 配置按需加载插件：
export default defineConfig({
	plugins: [
		vue(),
		svgLoader({
			svgoConfig: {},
		}),
		AutoImport(),
		Components({
			resolvers: [ArcoResolver()],
		}),
	],

	// 配置路径别名：
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
			components: path.join(__dirname, 'src/components'),
		},
		extensions: ['.ts', '.js', '.vue'],
	},
	define: {
		'process.env': {},
	},

	// 引入相关css：
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/src/scss/variable.scss";`,
				javascriptEnabled: true,
				modifyVars: {},
			},
		},
	},
})

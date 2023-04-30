import { mergeConfig } from 'vite'
import baseConfig from './config/vite.config.base'

// https://vitejs.dev/config/
export default mergeConfig(baseConfig, {
	mode: 'dev', // 运行环境变量
	server: {
		// 项目部署端口：
		prot: 8000,
		host: '0.0.0.0',
	},
})

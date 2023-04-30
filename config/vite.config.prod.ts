// 运行环境配置文件：
import { mergeConfig } from 'vite' // mergeConfig合并配置
import baseConfig from './vite.config.base'

export default mergeConfig(
	{
		mode: 'production',
		base: '/',
		build: {
			chunkSizeWarningLimit: 500,
			reportCompressedSize: true,
			manifest: true,
			minify: 'esbuild',
			outDir: 'dist',
			// 👇打包文件按照类型粉文件夹显示:
			rollupOptions: {
				output: {
					entryFileNames: `static/js/[name].js`,
					chunkFileNames: `static/js/[name].js`,
					assetFileNames: `static/[ext]/[name].[ext]`,
				},
			},
		},
	},
	baseConfig
)

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		unocss(),
		Components({
			resolvers: [
				ArcoResolver({
					sideEffect: true
				})
			]
		})
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				// 静态资源打包做处理
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
			}
		},
		minify: 'terser',
		terserOptions: {
			// 清除console和debugger
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	esbuild: {
		pure: ['console.log', 'debugger']
	}
})

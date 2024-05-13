import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/multiplication/',
	/* server: {
		port: 4000,
		host: '0.0.0.0'
	}, */
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src'
		}
	}
})

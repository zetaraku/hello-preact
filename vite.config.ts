/// <reference types="vitest" />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
		alias: {
			'@': new URL('./src', import.meta.url).pathname,
		},
	},
	test: {
		environment: 'jsdom',
	},
});

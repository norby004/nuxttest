import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	compatibilityDate: '2024-04-03',
	devtools: {
		enabled: true,
	},
	modules: [
		'@primevue/nuxt-module'
	],
	imports: {
		dirs: ['api', 'stores', 'interfaces', 'interfaces/Admin']
	},
	primevue: {
		options: {
			ripple: true,
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: 'none',
				}
			}
		}
	}
})

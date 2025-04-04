// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxtjs/turnstile"],
	turnstile: {
		siteKey: "0x4AAAAAABD1llFGNRJ8lNly",
	},
	runtimeConfig: {
		turnstile: {
			secretKey: "0x4AAAAAABD1lg6eZuuevKBnxQFymrkRtWU",
		},
	},
});

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/custom.css'
  ],
  vite: {
    server: {
      fs: {
        // Set the allowed serving directories
        strict: false,
      },
    },
  },
})

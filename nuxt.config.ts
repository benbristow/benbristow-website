// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'preload', as: 'style', type: 'text/css', href: '//fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap' },
                { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap' }
            ],
            titleTemplate: '%s - ' + 'Ben Bristow',
        },
    },
    css: ['@/assets/scss/main.scss'],
    ssr: false,
});

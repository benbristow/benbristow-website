// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'preload', as: 'style', type: 'text/css', href: '//fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap' },
                { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', crossorigin: 'anonymous', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' }
            ],
            titleTemplate: '%s - ' + 'Ben Bristow',
        },
    },
    css: ['@/assets/scss/main.scss'],
    ssr: false,
});

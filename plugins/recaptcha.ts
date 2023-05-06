import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LdrrMoZAAAAAHV2e1Zr6yID-uykAgmWuu-fk59P',
        loaderOptions: {
            renderParameters: {
                hl: 'en'
            }
        }
    })
})

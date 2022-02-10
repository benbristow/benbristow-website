import { createApp } from 'vue';
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig } from '@formkit/vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import App from './App.vue';

const app = createApp(App)
    .use(formkitPlugin, formkitDefaultConfig)
    .use(VueReCaptcha, { siteKey: "6LdrrMoZAAAAAHV2e1Zr6yID-uykAgmWuu-fk59P" });

export default app;
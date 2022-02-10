import './scss/main.scss';

import { ApplicationInsights } from '@microsoft/applicationinsights-web';

import ContactApp from './contact';

const appInsights = new ApplicationInsights({
    config: {
    instrumentationKey: 'bb397acc-54ed-4f2e-a08e-9e8d1ad6e3d2'
    }
});

appInsights.loadAppInsights();
appInsights.trackPageView();

window.addEventListener('load', () => {
    const contactElement = document.getElementById('bb-js-contact');
    if (contactElement) {
        ContactApp.mount(contactElement);
    }
});

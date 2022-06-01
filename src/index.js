import './scss/main.scss';

import createContactApp from './contact';

window.addEventListener('load', () => {
    const contactElement = document.getElementById('bb-js-contact');
    if (contactElement) {
        const contactApp = createContactApp();
        contactApp.mount(contactElement);
    }
});

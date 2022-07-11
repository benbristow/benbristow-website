import './scss/main.scss';

import createContactApp from './contact';
import createYoutubeApp from './youtube';

const appCreators = {
    contact: createContactApp,
    youtube: createYoutubeApp
}

window.addEventListener('load', () => {
    Object.keys(appCreators).forEach(key => {
        const appCreator = appCreators[key];
        const appElement = document.getElementById(`bb-js-${key}`);
        if (appElement) {
            const app = appCreator();
            appElement.classList.remove('d-none');
            app.mount(appElement);
        }
    });
});

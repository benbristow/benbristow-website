import './scss/main.scss';

import createContactApp from './contact';
import createPhotosApp from './photos';
import createVideosApp from './videos';

const appCreators = {
    contact: createContactApp,
    photos: createPhotosApp,
    videos: createVideosApp,
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

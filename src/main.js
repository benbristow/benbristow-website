import './scss/main.scss';

import axios from 'axios';

import { config } from './config';

window.addEventListener('load', () => {
  function registerNav() {
    const component = document.getElementById('bb-nav');
    if (component) {
      const burgerButton = component.querySelector('#bb-nav-burger-button');
      if (burgerButton) {
        burgerButton.addEventListener('click', () => {
          component.classList.toggle(`${component.classList[0]}--open`);
        });
      }
    }
  }

  registerNav();
});


api/ContactForm

window.onContactFormSubmit = async (recaptchaCode) => {
  const form = document.getElementById('contact-form');
  const submitButton = form.getElementById('submit-button');

  const data = {
    name: form.querySelector('[name=Name]').value,
    email: form.querySelector('[name=EmailAddress]').value,
    message: form.querySelector('[name=Message]').value,
    recaptchaCode
  };

  const response = await axios.post(`${config.apiUrl}/ContactForm`, data);

  console.log(response);
}
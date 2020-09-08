import axios from 'axios';

import './scss/main.scss';

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

window.onContactFormSubmit = (recaptchaCode) => {
  const form = document.getElementById('contact-form');
  const submitButton = form.getElementById('submit-button');

  const data = {
    name: form.querySelector('[name=Name]').value,
    email: form.querySelector('[name=EmailAddress]').value,
    message: form.querySelector('[name=Message]').value,
    recaptchaCode
  };

  console.log(data);
}
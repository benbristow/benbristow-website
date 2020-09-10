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

  function registerContactFormSubmit() {
    const form = document.getElementById('bb-contact-form');
    if (form) {
      const submitButton = form.querySelector('button[type=submit]');

      const handleError = (exception, message) => {
        alert(message);
        submitButton.disabled = false;
        console.error(exception);
      }

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        submitButton.disabled = true;

        let recaptchaCode;
        try {
          recaptchaCode = await grecaptcha.execute('6LdrrMoZAAAAAHV2e1Zr6yID-uykAgmWuu-fk59P', { action: 'submit' });
        } catch (e) {
          handleError(e, 'Error verifying with ReCAPTCHA. Please try again.');
          return;
        }

        const formData = {
          name: form.querySelector('[name=Name]').value,
          email: form.querySelector('[name=EmailAddress]').value,
          message: form.querySelector('[name=Message]').value,
          recaptchaCode
        };

        try {
          await axios.post(`${config.apiUrl}/ContactForm`, formData);
          
          alert("Thanks for your message! I'll be in touch as soon as possible.");
          form.reset();
          submitButton.disabled = false;
          window.scrollTo(0, 0);
        } catch (e) {
          handleError(e, e.response ? `Error: ${e.response.data.error}` : 'Error sending message. Please try again');
          return;
        }
      });
    }
  }

  registerNav();
  registerContactFormSubmit();
});


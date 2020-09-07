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
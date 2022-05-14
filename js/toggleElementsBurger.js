import { burger, menuPhone, lockedScreen } from './variables.js';

const toggleBurger = () => {
  burger.classList.toggle('c-burger--open');
  menuPhone.classList.toggle('c-navigation--open');
  lockedScreen.classList.toggle('c-locked-screen--show');
};

export { toggleBurger };

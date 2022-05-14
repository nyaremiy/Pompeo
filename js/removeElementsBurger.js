import { burger, menuPhone, lockedScreen } from './variables.js';

const removeBurger = () => {
  burger.classList.remove('c-burger--open');
  menuPhone.classList.remove('c-navigation--open');
  lockedScreen.classList.remove('c-locked-screen--show');
};

export { removeBurger };

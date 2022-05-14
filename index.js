import { toggleBurger } from './js/toggleElementsBurger.js';
import { burger, linkNav, lockedScreen } from './js/variables.js';
import { removeBurger } from './js/removeElementsBurger.js';

// При кліку відкривається бургер
burger.addEventListener('click', () => {
  toggleBurger();
});

// При кліку на посиланя в меню закривається бургер
for (const link of linkNav) {
  link.addEventListener('click', () => {
    removeBurger();
  });
}

// При кліку в будь якому місці екрану крім меню, меню закривається
lockedScreen.addEventListener('click', () => {
  removeBurger();
});

// При свайпу в будь якому місці екрану крім меню, меню закривається
lockedScreen.addEventListener('touchmove', () => {
  removeBurger();
});

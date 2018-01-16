import {ready} from '../../global/js/utils';

import '../styles/contact-us.scss';

const init = () => {
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');

  console.log(`First: ${first}`);
  console.log(`Thrird: ${second}`);
};

ready(init);

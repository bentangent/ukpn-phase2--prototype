import {ready} from '../../global/js/utils';

import '../styles/forms.scss';

const init = () => {
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');

  console.log(`First: ${first}`);
  console.log(`Second: ${second}`);
};

ready(init);

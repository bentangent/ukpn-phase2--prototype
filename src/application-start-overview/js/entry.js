import {ready} from '../../global/js/utils';
import '../styles/application-start-overview.scss';
import '../application-start-overview.pug';


const init = () => {
  const first = document.querySelector('.first');
  const second = document.querySelector('.second');

  console.log(`First: ${first}`);
  console.log(`Second: ${second}`);
};

ready(init);

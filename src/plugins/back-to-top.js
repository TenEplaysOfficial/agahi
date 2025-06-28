import config from '../core/appConfig';
import backToTopHTML from '../layouts/back-to-top.html';
import './styles/back-to-top.css';

const temp = document.createElement('div');
temp.innerHTML = backToTopHTML;

document.body.appendChild(temp.firstElementChild);

const backToTopButton = document.getElementById('back-to-top');
const scrollThreshold = config.scrollThreshold;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

import layout from '../layouts/layout.html';
import config from './appConfig';
import { fetchMD } from './fetch';
import { routes } from './routes';
import { update } from './update';

console.log(
  config && config.name ? `Welcome to ${config.name}` : 'Welcome to Agahi',
);

const mountApp = () => {
  const app = document.getElementById(config.el || 'app');

  if (app) {
    app.innerHTML = layout;
  } else {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = layout;

    while (wrapper.firstChild) {
      document.body.appendChild(wrapper.firstChild);
    }
  }

  // fetch the sidebar, navbar, and footer
  fetchMD('_agahi/sidebar.md', 'aside-nav');
  fetchMD('_agahi/navbar.md', 'header-nav');
  fetchMD('_agahi/footer.md', 'footer');

  routes();
  update();

  document.dispatchEvent(new Event('agahi:ready'));
};

window.addEventListener('DOMContentLoaded', mountApp);

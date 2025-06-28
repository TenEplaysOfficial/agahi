import config from './appConfig';
import { fetchMD } from './fetch';

export const routes = () => {
  if (!location.hash) {
    location.hash = config.defaultRoute || '#/';
  }
  const handleRouteChange = () => {
    const currentRoute = location.hash;
    fetchMD(currentRoute, 'md');
  };

  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('load', handleRouteChange);
};

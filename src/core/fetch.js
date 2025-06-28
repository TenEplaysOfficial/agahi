import { renderMD } from './render';
import PageNotFound from '../layouts/404.html';
import config from './appConfig';

/**
 * Fetches and renders Markdown content from a file based on the current route or file path.
 * @param {string} path - Route or direct file path (e.g. #/guide or #README)
 * @param {string} el - ID of the DOM element to render the content into
 * @returns {Promise<void>}
 */
export const fetchMD = async (path, el) => {
  // console.log('[Agahi] Fetching Markdown from path:', path);

  if (!path || !el) {
    console.error('[Agahi] Invalid parameters:', { path, el });
    return;
  }

  const element = document.getElementById(el);

  if (!element) {
    console.error(`[Agahi] Element with ID "${el}" not found.`);
    return;
  }

  // Normalize path to file name
  const normalizedPath = (() => {
    const cleaned = path.split('?')[0];
    if (cleaned === '#' || cleaned === '#/') {
      return config.defaultRoute || 'README';
    } else if (cleaned.startsWith('#/')) {
      return cleaned.slice(2);
    } else if (cleaned.startsWith('#')) {
      return cleaned.slice(1);
    }
    return cleaned;
  })();

  const filePath = `${normalizedPath.replace(/\.md$/, '')}.md`;

  try {
    // console.log('[Agahi] Fetching Markdown from file path:', filePath);
    element.innerHTML = '<p>Loading...</p>';

    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath} (HTTP ${response.status})`);
    }

    const rawMarkdown = await response.text();
    const renderedHTML = await renderMD(rawMarkdown);
    element.innerHTML = renderedHTML;
  } catch (error) {
    console.error('[Agahi] Markdown render error:', error);
    element.innerHTML = PageNotFound;
  }
};

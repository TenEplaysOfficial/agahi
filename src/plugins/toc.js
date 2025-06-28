import config from '../core/appConfig';
import { getParam, setParams } from '../core/utils';
import TOCHTML from '../layouts/toc.html';
import './styles/toc.css';

/**
 * Table of Contents (TOC) Plugin
 * This plugin generates a Table of Contents for the article based on its headings.
 * It scans the article for headings (h2 to h6) and creates a nested list structure.
 * The TOC is inserted before the article in the DOM.
 * It uses MutationObserver to detect dynamically
 */

document.addEventListener('agahi:ready', () => {
  const article = document.getElementById('md');
  if (!article) {
    console.error('[Agahi] Article element with id="md" not found.');
    return;
  }

  if (!document.getElementById('toc')) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = TOCHTML;
    article.parentNode.insertBefore(wrapper.firstElementChild, article);
  }

  if (config.tocLabel) {
    const tocTitle = document.querySelector('#toc-title #label');
    tocTitle.textContent = config.tocLabel;
  }

  const buildTOC = () => {
    const toc = document.getElementById('toc');
    const tocList = toc?.querySelector('nav > ul');
    if (!tocList) return;

    tocList.innerHTML = '';

    const headings = article.querySelectorAll(config.tocHeadings.join(', '));

    if (headings.length === 0) {
      const emptyItem = document.createElement('li');
      emptyItem.classList.add('toc-empty');
      emptyItem.textContent = 'Nothing to show';
      tocList.appendChild(emptyItem);
      return;
    }

    const stack = [{ level: 0, list: tocList }];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1], 10);
      if (isNaN(level) || level < 1 || level > 6) return;

      const li = document.createElement('li');

      const a = document.createElement('a');
      a.href = `?id=${heading.id}`;
      a.textContent = heading.textContent || `Untitled ${heading.tagName}`;
      li.appendChild(a);

      while (stack.length && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];
      parent.list.appendChild(li);

      const newList = document.createElement('ul');
      li.appendChild(newList);
      stack.push({ level, list: newList });

      a.addEventListener('click', (e) => {
        e.preventDefault();
        setParams({ id: heading.id });
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const id = getParam('id');
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  };

  const observer = new MutationObserver(buildTOC);
  observer.observe(article, { childList: true, subtree: true });

  document.getElementById('toc-title').addEventListener('click', function () {
    const toc = document.getElementById('toc');
    toc.classList.toggle('expanded');
    toc.classList.toggle('collapsed');
  });
});

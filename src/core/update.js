import config from './appConfig';
import SearchFilter from './utils/search';

/**
 * Updates document title based on <h1> or <h2> inside markdown content.
 */
const updateTitleFromMarkdown = (md) => {
  const heading = md.querySelector('h1, h2');
  const titleText = heading?.textContent?.trim() || config.name.trim();

  document.title =
    titleText === config.name.trim()
      ? config.name
      : `${titleText} - ${config.name}`;
};

/**
 * Adds edit button to #page-actions if enabled.
 */
const addEditButton = () => {
  const container = document.getElementById('page-actions');
  if (!container || !config.edit) return;

  const hashPath =
    location.hash.split('?')[0].replace(/^#\/?/, '') ||
    config.defaultRoute ||
    'README';
  const fullEditURL = `${config.editPath.replace(/\/$/, '')}/${hashPath}.md`;

  const editButton = document.createElement('a');
  editButton.id = 'edit-page';
  editButton.href = fullEditURL;
  editButton.target = '_blank';
  editButton.rel = 'noopener noreferrer';
  editButton.textContent = config.editLabel;
  editButton.className = 'edit-page-button';

  container.appendChild(editButton);
};

/**
 * Handles sidebar toggle on mobile.
 */
const setupAsideToggle = () => {
  const toggleBtn = document.getElementById('toggle-aside');
  const aside = document.querySelector('aside');
  if (!toggleBtn || !aside) return;

  toggleBtn.addEventListener('click', () => {
    aside.classList.toggle('active-aside');
    toggleBtn.classList.toggle('open');
  });

  window.addEventListener('hashchange', () => {
    if (window.innerWidth <= 810) {
      aside.classList.remove('active-aside');
      toggleBtn.classList.remove('open');
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 810) {
        aside.classList.remove('active-aside');
        toggleBtn.classList.remove('open');
      }
    }, 150);
  });
};

/**
 * Main update function.
 */
export const update = () => {
  const md = document.getElementById('md');
  if (md) {
    const observer = new MutationObserver(() => updateTitleFromMarkdown(md));
    observer.observe(md, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    updateTitleFromMarkdown(md);
  }

  const nameEl = document.getElementById('name');
  if (nameEl) nameEl.textContent = config.name;

  const searchEl = document.getElementById('search-aside');
  if (searchEl) {
    if (config.showSearch) {
      searchEl.placeholder = config.searchPlaceholder;
      SearchFilter();
    } else {
      searchEl.remove();
    }
  }

  const footer = document.getElementById('footer');
  if (footer && !config.showFooter) {
    footer.remove();
  }

  addEditButton();
  setupAsideToggle();
};

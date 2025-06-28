export default function SearchFilter() {
  const searchInput = document.getElementById('search-aside');
  const nav = document.querySelector('aside nav');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    filterList(nav.querySelector('ul'), query);
  });

  function filterList(ul, query) {
    let hasVisibleChild = false;

    [...ul.children].forEach((li) => {
      const link = li.querySelector(':scope > a');
      const childUl = li.querySelector(':scope > ul');

      let textMatch = link && link.textContent.toLowerCase().includes(query);
      let childMatch = false;

      if (childUl) {
        childMatch = filterList(childUl, query);
      }

      const shouldShow = textMatch || childMatch;
      li.style.display = shouldShow ? 'list-item' : 'none';

      if (shouldShow) hasVisibleChild = true;
    });

    return hasVisibleChild;
  }
}

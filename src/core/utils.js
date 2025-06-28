/**
 *
 * @param {*} key - The key to retrieve from the URL parameters
 * @description This function retrieves the value of a specified key from the URL's query parameters.
 * @returns - The value associated with the key, or null if the key does not exist.
 * @example
 * // If the URL is "https://example.com?user=123", calling getParam('user') will return '123'.
 */

export const getParam = (key) => {
  const hash = window.location.hash || '#/';
  const [, queryString = ''] = hash.split('?');
  return new URLSearchParams(queryString).get(key);
};

/**
 *
 * @param {*} params - An object containing key-value pairs to set as URL parameters
 * @description This function updates the URL's query parameters with the provided key-value pairs.
 * If a value is null, the corresponding parameter will be removed from the URL.
 * @example
 * If the current URL is "https://example.com" and you call setParams({ user: '123', page: null }),
 * the URL will be updated to "https://example.com?user=123".
 * * @returns - This function does not return a value; it modifies the browser's URL.
 */

export const setParams = (params) => {
  const hash = window.location.hash || '#/';
  const [basePath, queryString = ''] = hash.slice(1).split('?');

  const searchParams = new URLSearchParams(queryString);

  Object.entries(params).forEach(([key, value]) => {
    if (value === null) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  });

  const newHash = `#/${basePath.replace(/^\/+/, '')}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
  window.history.replaceState({}, '', newHash);
};

/**
 * copy-code Plugin
 * This plugin adds a "Copy Code" button to code blocks in the article.
 * When clicked, it copies the code to the clipboard and shows a confirmation message.
 * It uses MutationObserver to detect dynamically added code blocks.
 */

import './styles/copy-code.css';

document.addEventListener('agahi:ready', () => {
  const article = document.getElementById('md');

  if (!article) {
    throw new Error(
      'Article element with id="md" not found. Copy code plugin cannot initialize.',
    );
  }

  /**
   * Adds a "Copy" button to a given code block and attaches the copy logic.
   * @param {HTMLElement} codeBlock - The <code> element to which the button should be added.
   */
  const addCopyButton = (codeBlock) => {
    const pre = codeBlock.parentElement;

    // Ensure the parent is a <pre> tag and that a copy button doesn't already exist.
    if (!pre || pre.tagName !== 'PRE' || pre.querySelector('.copy-code')) {
      return;
    }

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code';
    copyButton.textContent = 'Copy';

    copyButton.onclick = () => {
      navigator.clipboard
        .writeText(codeBlock.textContent)
        .then(() => {
          copyButton.textContent = 'Copied!';
          setTimeout(() => (copyButton.textContent = 'Copy'), 1500);
        })
        .catch((err) => {
          console.error('Failed to copy using navigator.clipboard:', err);
        });
    };

    pre.appendChild(copyButton);
  };

  article.querySelectorAll('pre > code').forEach(addCopyButton);

  const observer = new MutationObserver((mutations) => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        if (node.nodeType !== 1) continue;

        const codes =
          node.tagName === 'CODE' && node.parentElement?.tagName === 'PRE'
            ? [node]
            : node.querySelectorAll?.('pre > code') || [];

        codes.forEach(addCopyButton);
      }
    }
  });

  observer.observe(article, { childList: true, subtree: true });
});

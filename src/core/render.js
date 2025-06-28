import * as marked from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';

const simpleSlugify = (text) =>
  text
    .toLowerCase()
    .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu, '')
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

export const renderMD = (data) => {
  try {
    const renderer = new marked.Renderer();

    renderer.heading = (text) => {
      const id = simpleSlugify(text.text);
      return `<h${text.depth} id="${id}">${text.text}</h${text.depth}>\n`;
    };

    renderer.code = (codeToken) => {
      const code = codeToken.text || codeToken;
      const language = codeToken.lang || '';

      if (language && hljs.getLanguage(language)) {
        const highlighted = hljs.highlight(code, { language }).value;
        return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
      }
      return `<pre><code>${DOMPurify.sanitize(code)}</code></pre>`;
    };

    marked.setOptions({
      renderer,
      gfm: true,
      breaks: true,
    });

    const renderedContent = DOMPurify.sanitize(marked.parse(data));

    return renderedContent;
  } catch (error) {
    console.error('Error in render function:', error);
    return '<p id="error"><strong>Failed to render content.</strong></p>';
  }
};

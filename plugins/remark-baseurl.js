
/**
 * Imports the 'unist-util-visit' module for traversing the Markdown AST and finding nodes of type 'image' and 'link'.
 */
import { visit } from 'unist-util-visit';

/**
 * Remark plugin to prepend baseUrl to relative URLs in Markdown images and links.
 * @param {Object} options
 * @param {string} options.baseUrl - For example, '/astro/'
 */
export default function remarkBaseUrl(options) {
  return (tree) => {
    const baseUrl = (options && options.baseUrl) || '/';

    visit(tree, 'image', (node) => {
      if (
        node.url &&
        !node.url.startsWith('http') &&
        !node.url.startsWith('/') &&
        !node.url.startsWith(baseUrl)
      ) {
        node.url = baseUrl.replace(/\/$/, '') + '/' + node.url.replace(/^\.\//, '');
      }
    });

    visit(tree, 'link', (node) => {
      if (
        node.url &&
        !node.url.startsWith('http') &&
        !node.url.startsWith('/') &&
        !node.url.startsWith(baseUrl)
      ) {
        node.url = baseUrl.replace(/\/$/, '') + '/' + node.url.replace(/^\.\//, '');
      }
    });
  };
}
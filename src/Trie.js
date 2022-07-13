class TrieNode {
  children;
  isEndOfString;

  constructor() {
    this.children = new Map();
    this.isEndOfString = false;
  }
}
class Trie {
  rootNode;

  constructor(strs) {
    this.rootNode = new TrieNode();

    strs.forEach((str) => {
      this.insert(str);
    });
  }

  contains = (str, returnNode) => {
    str = str.toLowerCase();
    const length = str.length;

    let crawlNode = this.rootNode;

    for (let level = 0; level < length; ++level) {
      const ch = str.charAt(level);

      if (!crawlNode.children.has(ch)) {
        return false;
      }

      crawlNode = crawlNode.children.get(ch);
    }

    if (returnNode) {
      return crawlNode;
    }

    return crawlNode.isEndOfString;
  };

  insert = (word) => {
    word = word.toLowerCase();

    const length = word.length;

    let crawlNode = this.rootNode;

    for (let level = 0; level < length; level++) {
      const char = word.charAt(level);

      if (!crawlNode.children.has(char)) {
        crawlNode.children.set(char, new TrieNode());
      }

      crawlNode = crawlNode.children.get(char);
    }

    crawlNode.isEndOfString = true;
  };

  getWords = (prefix) => {
    let prefixRootNode = this.contains(prefix, true);

    if (!prefixRootNode) {
      return [];
    }

    let result = [];

    this.#_getWordsHelper(prefixRootNode, prefix, result);

    return result.sort();
  };

  #_getWordsHelper = (root, currString, result) => {
    if (root === null) {
      return;
    }
    if (root.isEndOfString) {
      result.push(currString);
    }
    for (let [key, value] of root.children) {
      this.#_getWordsHelper(value, currString + key, result);
    }
  };
}

export { Trie };

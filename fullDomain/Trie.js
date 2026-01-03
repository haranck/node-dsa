// trie

class trieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new trieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new trieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
  autoComplete(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    let words = [];
    function dfs(node, path) {
      if (node.isEndOfWord) {
        words.push(path);
      }
      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    }
    dfs(node, prefix);
    return words;
  }
  longestCommonPrefix() {
    let prefix = "";
    let node = this.root;
    while (true) {
      let keys = Object.keys(node.children);
      console.log(keys)
      if (keys.length !== 1 || node.isEnd) break;
      let char = keys[0];
      prefix += char;
      node = node.children[char];
    }
    return prefix;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("cap");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");

console.log(trie.search("ca"));
console.log(trie.startsWith("cat"));
console.log(trie.autoComplete("ca"));

const trie2 =new Trie()
trie2.insert('fight')
trie2.insert('flower')
trie2.insert('floor')
trie2.insert('flick')

console.log(trie2.longestCommonPrefix())
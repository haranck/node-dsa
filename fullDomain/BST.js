
// Binary Search Tree Implementation BST

class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {    
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
        return;
      }
      this.insertNode(node.left, newNode);
    } else {
      if (!node.right) {
        node.right = newNode;
        return;
      }
      this.insertNode(node.right, newNode);
    }
  }
  search(node = this.root, value) {
    if (!node) return false;
    if (node.data === value) {
      return true;
    } else if (node.data > value) {
      return this.search(node.left, value);
    } else {
      return this.search(node.right, value);
    }
  }
  min(node = this.root) {
    if (!node.left) return node.data;
    return this.min(node.left);
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(node, value) {
    if (!node) return;
    if (node.data > value) {
      node.left = this.deleteNode(node.left, value);
    } else if (node.data < value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) return;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let min = this.min(node.right);
      node.data = min;
      node.right = this.deleteNode(node.right, min);
    }
    return node;
  }
  sum(node = this.root) {
    if (!node) return 0;
    return node.data + this.sum(node.left) + this.sum(node.right);
  }
  leftSum() {
    if (!this.root || !this.root.left) return 0;
    return this.sum(this.root.left);
  }
  height(node = this.root) {
    if (!node) return 0;
    let left = this.height(node.left);
    let right = this.height(node.right);
    return Math.max(left, right) + 1;
  }  
  leftHeight() {
    if (!this.root || !this.root.left) return 0;
    return this.height(this.root.left);  
  }
  maxDepth(node = this.root) {
    if (!node) return 0;
    let left = this.maxDepth(node.left);
    let right = this.maxDepth(node.right);
    return Math.max(left, right) + 1;
  }
  inorder(node = this.root, result = []) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.data);
      this.inorder(node.right, result);
    }
    return result;
  }
  degenerate() {
    let values = this.inorder();
    let newRoot = new Node(value[0]);
    let current = newRoot.data;

    for (let i = 1; i < values.length; i++) {
      current.right = new Node(values[i]);
      current = current.right;
    }
    this.root = newRoot;
  }
  depth(node = this.root) {
    let d = 0;
    while (node) {
      d++;
      node = node.left;
    }
    return d;
  }
  countNodes(node = this.root) {
    if (!node) return 0;
    return this.countNodes(node.left) + this.countNodes(node.right) + 1;
  }
  isPerfect() {
    let depth = this.depth();
    let totalNode = this.countNodes();
    return totalNode === Math.pow(2, depth) - 1;
  }

  isValid(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true;
    if (node.data > max || node.data < min) return false;
    return (
      this.isValid(node.left, min, node.data) &&
      this.isValid(node.right, node.data, max)
    );
  }

  countOfLeafNode(node = this.root) {
    if (!node) return 0;
    if (!node.right && !node.left) return 1;
    return this.countOfLeafNode(node.left) + this.countOfLeafNode(node.right);
  }
  sumOfLeafNodes(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return node.data;
    return this.sumOfLeafNodes(node.left) + this.sumOfLeafNodes(node.right);
  }
  leftNodeCount(node = this.root) {
    if (!node) return 0;
    let count = 0;
    if (node.left) {
      count += 1;
    }
    count += this.leftNodeCount(node.left);
    count += this.leftNodeCount(node.right);
    return count;
  }
  degree(node = this.root) {
    if (!node) return;
    let degree = 0;
    if (node.left) degree++;
    if (node.right) degree++;
    return degree;
  }
  closest(target) {
    let current = this.root;
    let closest = current.data;
    while (current) {
      if (Math.abs(current.data - target) < Math.abs(closest - target)) {
        closest = current.data;
      }

      if (current.data > target) {
        current = current.left;
      } else if (current.data < target) {
        current = current.right;
      } else {
        break;
      }
    }
    return closest;
  }

  kthSmallest(k) {
    let result = null;
    let count = 0;
    function inorder(node) {
      if (!node || count >= k) return;
      inorder(node.left);
      count++;
      if (count === k) {
        result = node.data;
        return;
      }
      inorder(node.right);
    }
    inorder(this.root);
    return result;
  }
  kthLargest(k) {
    let result = null;
    let count = 0;
    function inorder(node) {
      if (!node || count >= k) return;
      inorder(node.right);
      count++;
      if (count === k) {
        result = node.data;
        return;
      }
      inorder(node.left);
    }
    inorder(this.root);
    return result;
  }
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.right);
      this.postOrder(node.left);
      console.log(node.data);
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(12);
tree.insert(8);

console.log("Inorder Traversal:", tree.inorder());
console.log("Max Depth:", tree.maxDepth());
console.log("Height:", tree.height());
console.log("Left Height:", tree.leftHeight());
console.log("Sum of all nodes:", tree.sum());
console.log("Left Subtree Sum:", tree.leftSum());
console.log("Is Perfect Tree?", tree.isPerfect());
console.log("Is Valid BST?", tree.isValid());
console.log("Leaf Node Count:", tree.countOfLeafNode());
console.log("Leaf Node Sum:", tree.sumOfLeafNodes());
console.log("Degree of root:", tree.degree());
console.log("Closest to 10:", tree.closest(10));
console.log("Kth Smallest (2):", tree.kthSmallest(2));
console.log("Kth Largest (2):", tree.kthLargest(2));
console.log("Search for 9:", tree.search(tree.root, 9));
console.log("Left Node Count:", tree.leftNodeCount());

console.log("\nLevel Order Traversal:");
tree.levelOrder();

console.log("\nPost Order Traversal:");
tree.postOrder();

//     10
//    /  \
//   9    11
//  /       \
// 8         12

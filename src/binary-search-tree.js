const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = add(this.rootNode, data)

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = add(node.right, data);
      } else {
        node.left = add(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.rootNode, data);
    
    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      
      if (node.data < data) {
        return search(node.right, data);
      } else {
        return search(node.left, data);
      }
    }
  }

  find(data) {
    return search(this.rootNode, data);
    
    function search(node, data) {
      if (!node) {
        return null;
      }
      console.log(node.right, node.left);
      if (node.data === data) {
        return node;
      }
      
      if (node.data < data) {
        return search(node.right, data);
      } else {
        return search(node.left, data);
      }
    }
  }

  remove(data) {    
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let maxFromLeft = node.left;

        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    return findMin(this.rootNode);

    function findMin(node) {
      while (node.left) {
        node = node.left;
      }

      return node.data;
    }
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    return findMax(this.rootNode);

    function findMax(node) {
      while (node.right) {
        node = node.right;
      }

      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
//       tree.add(9);
//       tree.add(14);
//       tree.add(54);
//       tree.add(2);
//       tree.add(6);
//       tree.add(8);
//       tree.add(31);
//       tree.add(1);
//       tree.remove(9);
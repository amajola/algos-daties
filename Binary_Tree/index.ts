
interface NodeInterface {
    value: number;
    left: NodeInterface | null
    right: NodeInterface | null;
    parent: NodeInterface | null;
}

/** This is a description of the foo function. */
class BinarySearchTree {
    rootNode: NodeInterface;

    /** This is a description of the foo function.
    * @constructor
    * @param {string} rootValue - The value of the root node
    */
    constructor(rootValue: number) {
      this.rootNode = {
        value: rootValue,
        parent: null,
        left: null,
        right: null,
      };
    }

    /** Creates a new Node
    * @constructor
    * @param {string} nodeValue - The value of the node being created
    * @param {string} parent - Parent node of the node being creating
    */
    createNode(nodeValue: number, parent: NodeInterface): NodeInterface {
      return {value: nodeValue, parent, left: null, right: null};
    }


    /** Traverses thought the tree in order sorting the values
    * @constructor
    * @param {string} node - This is used for recursion.
    * @param {string} sortedValues - The Accumulator for the function
    */
    inOrderTraversal(
        node: NodeInterface = this.rootNode,
        sortedValues: Array<number> = []
    ): Array<number> {
      if (
        !sortedValues.includes(node.value) &&
            node.left === null &&
            node.right === null
      ) {
        sortedValues.push(node.value);
        this.inOrderTraversal(node.parent, sortedValues);
      } else if (!sortedValues.includes(node.left.value)) {
        this.inOrderTraversal(node.left, sortedValues);
        sortedValues.push(node.value);
        if (
          node.right != null &&
                !sortedValues.includes(node.right.value)
        ) {
          this.inOrderTraversal(node.right, sortedValues);
          sortedValues.push(node.value);
        }
      }
      return sortedValues;
    }


    /** Creates a new Node
    * @constructor
    * @param {string} node - Node used for the search
    */
    findMin(node: NodeInterface): NodeInterface {
      if (node.left != null) {
        return this.findMin(node.left);
      }
      return node;
    }

    /** Creates a new Node
    * @constructor
    * @param {string} nodeValue - Value used for the search
    * @param {string} node - Used for recursion.
    */
    findNode(nodeValue: number, node: NodeInterface = this.rootNode) {
      if (node !== null && nodeValue > node.value) {
        this.findNode(nodeValue, node.right);
      } else if (node !== null && nodeValue < node.value) {
        this.findNode(nodeValue, node.left);
      } else if (node !== null && nodeValue === node.value) return node;
    }


    /** Creates a new Node
    * @constructor
    * @param {string} nodeValue - Value used for the search and delete node
    */
    deleteNode( nodeValue: number ) {
      const nodeRemove = this.findNode(nodeValue);

      if (nodeRemove.right !== null) {
        const minimumValue = this.findMin(nodeRemove.right);
        if (minimumValue.right === null) {
          nodeRemove.value = minimumValue.value;
        } else {
          minimumValue.parent.left = minimumValue.right;
        }
      } else {
        nodeRemove.parent.left = nodeRemove.left;
      }
    }

    /** Creates a new Node
    * @constructor
    * @param {string} nodeValue - Value used create the new Node.
    * @param {string} node - Used for recursion
    */
    addNode(nodeValue: number, node: NodeInterface = this.rootNode) {
      if (nodeValue >= node.value) {
        if (node.right === null) {
          node.right = this.createNode(nodeValue, node);
          return;
        }
        this.addNode(nodeValue, node.right);
      } else if (nodeValue <= node.value) {
        if (node.left === null) {
          node.left = this.createNode(nodeValue, node);
          return;
        }
        this.addNode(nodeValue, node.left);
      }
    }
}

export default BinarySearchTree;

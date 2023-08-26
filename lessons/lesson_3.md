# Week 3: Trees

This week we're going to focus on learning about trees. A tree is a data structure, and a data structure is a fun way to say thing (often a class) which is responsible for storing data in a program. The nice thing about data structures is that they often have good performance in terms of storage and lookup.

To get started learning about trees, watch the following videos. Watch them multiple times if needed to develop your understanding around how trees work:

- https://www.youtube.com/watch?v=oSWTXtMglKE
- https://www.youtube.com/watch?v=1-l_UOFi1Xw

To test your understanding, see if you can define the following terms:
 - Node
 - Root
 - Leaf
 - Parent
 - Child
 - The height of a tree
 - The depth of a node

Then, finish the following JS program - by running it on your computer until you no longer get any errors.

To run it, copy the code and save it in your computer somewhere you have access to from a terminal. Then run the application by running `node <treefilename>.js`. Feel free to name it whatever you like.

```javascript
const assert = require('assert');

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // todo, insert left values left and right values right
    }

    contains(value) {
        // todo, return boolean of if value is in tree
    }
}


// NOTE NOTE: Everything below this is test code, you only need to change implement the above functions

const root = new BinaryTreeNode(10);

// step one should work already
assert(root.value === 10);
assert(root.left === null);

// step 2, implement the insert function
root.insert(4);

assert(root.left instanceof BinaryTreeNode);
assert(root.left.value === 4);
assert(root.right === null);

// step 3, see if values are contained in tree
root.insert(6);
assert(root.contains(4) === true);
assert(root.contains(6) === true);
assert(root.contains(10282) === false);

// step 4, make sure the tree is ordered properly
function verifyInOrder(node) {
    if (node.left !== null) {
        if (node.left.value > node.value) {
            throw(new Error(`left child ${node.left.value} larger than node ${node.value}`));
        }
        verifyInOrder(node.left);
    }
    if (node.right !== null) {
        if (node.right.value < node.value) {
            throw(new Error(`right child ${node.right.value} smaller than node ${node.value}`));
        }
        verifyInOrder(node.right);
    }
}

root.insert(17);
root.insert(9);
root.insert(12);
root.insert(1);
root.insert(0);
root.insert(13);
verifyInOrder(root);
```

# Generating parse trees for expressions

Now that you understand trees, we're going to work on turning math expressions into trees. Read the following article to better understand how this can be done.

https://www.educative.io/answers/how-to-represent-a-mathematical-expression-using-the-parse-tree

Once you're comfortable with that information, check out the below website to try out some examples. Try putting some expressions into the box named "Normal Text" and then hitting the draw button. Try some of the below expressions:

https://trkern.github.io/tree

 - `5 + 4`
 - `5 + 4 * 8`
 - `(5 + 4) * 8`

Did you notice anything about how the tree changed when you added parentheses?

Try to figure out what the parse trees look like for the following problems. Use the above website to check your work if needed.

1. `2`
2. `2 - 4`
3. `2^3-1`
4. `2^(3-1)`
5. `(2-1)^3`
6. `120 - 8 *4 + 16 / 12`


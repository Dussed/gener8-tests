
let node = {
  value: 1,
  left: {
    value: 8,
    left: null,
    right: {
      value: -2,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    value: 1
  }
}

function countTree (tree) {
  
  let totalValue = 0

  totalValue += tree.value

  if (tree.left) {
    totalValue += countTree(tree.left)
  }

  if (tree.right) {
    totalValue += countTree(tree.right)
  }

  return totalValue
} 

console.log(countTree(node))

class Node{
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(data){
        const node = this.root
        if(node === null){
            this.root = new Node(data)
            return
        }else{
            function searchTree(n){
                if(data > n.data){
                    if(n.right === null){
                        n.right = new Node(data)
                        return
                    }else {
                        return searchTree(n.right)
                    }
                }else if(data < n.data){
                    if(n.left === null){
                        n.left = new Node(data)
                        return
                    }else {
                        return searchTree(n.left)
                    }
                }else {
                    return null
                }
            }
            return searchTree(node)
        }
    }
    search(data){
        let node = this.root

        while(node.data != data){
            if(data > node.data){
                node = node.right
            }else {
                node = node.left
            }
            if(node == null) return node
        }
        return node
    }
    preOrderRecursive(){
        const node = this.root
        const res = []

        function recursion(n){
            if(n == null) return 

            res.push(n.data)
            recursion(n.left)
            recursion(n.right)
        }

        recursion(node)
        return res
    }
    preOrderIterative(){
        const stack = []
        const res = []

        if(this.root !== null) stack.push(this.root)

        while(stack.length > 0){
            let node = stack.pop()
            res.push(node.data)

            if(node.right) stack.push(node.right)
            if(node.left) stack.push(node.left)
        }
        return res
    }
    min(){
        let node = this.root
        while(node.left != null){
            node = node.left
        }
        return node
    }
    max(){
        let node = this.root
        while(node.right != null){
            node = node.right
        }
        return node
    }

}

const bTree = new BST()
bTree.insert(50)
bTree.insert(25)
bTree.insert(75)
bTree.insert(100)
bTree.insert(15)
console.log(bTree.max())

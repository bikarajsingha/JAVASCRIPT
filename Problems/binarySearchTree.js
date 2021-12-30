class Node{
    constructor(data, left=null, right=null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(item){
        const node = this.root
        if(node === null){
            this.root = new Node(item)
            return 
        }else {
            const searchTree = function(item){
                if(item < node.data){
                    if(node.left === null){
                        node.left = new Node(item)
                        return
                    }else {
                        return searchTree(item.left)
                    }
                }else if(item > node.data){
                    if(node.right === null){
                        node.right = new Node(item)
                        return
                    }else {
                        return searchTree(item.right)
                    }
                }else {
                    return null
                }
            }
            return searchTree(item)
        }
    }
    search(item){
        let node = this.root

        while(node.data !== item){
            if(node.data > item){
                node = node.left
            }else {
                node = node.right
            }
            if(node === null) return null
        }
        return node
    }
}

const bTree = new BST()
bTree.insert(50)
bTree.insert(75)
bTree.insert(25)

console.log(bTree.search(7))
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit', addItem)

//Delete event 
itemList.addEventListener('click', removeItem)

//Remove item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}
//Add item
function addItem(e){
    e.preventDefault()

    //Get input value
    var newItem = document.getElementById('item').value

    //Create a new li element
    var li = document.createElement('li')
    //Add class
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    //Create a new button 
    var delBtn = document.createElement('button')
    //Add class
    delBtn.className = 'btn btn-danger btn-sm float-right delete'
    delBtn.appendChild(document.createTextNode('X'))

    //Append delBtn to li
    li.appendChild(delBtn)

    var editBtn = document.createElement('button')
    editBtn.class = 'btn btn-danger btn-sm float-right delete'
    editBtn.appendChild(document.createTextNode('E'))
    li.appendChild(editBtn)

    //Append li to list
    itemList.appendChild(li) 
}

//Add edit button 
let list = document.querySelectorAll('.list-group-item')


for(let i of list){
    var editBtn = document.createElement('button')
    editBtn.class = 'btn btn-danger btn-sm float-right delete'
    editBtn.appendChild(document.createTextNode('E'))
    i.appendChild(editBtn)
}
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

//form submit event
form.addEventListener('submit', addItem)

//Delete event 
itemList.addEventListener('click', removeItem)

//Filter
filter.addEventListener('keyup', filterItems)

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
    
    var des = newItem.split('des:')
    newItem = des[0]
    des = des[1]
    
    //Create a new li element
    var li = document.createElement('li')
    //Create a new p element
    var p = document.createElement('p')
    
    //Add class
    p.classNmae ='list-group-item'
    p.appendChild(document.createTextNode(des))

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
    li.appendChild(p)
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

//Filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase()
    console.log(text)
    var items = itemList.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        var desc = item.lastElementChild.textContent

        if(itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else {
            item.style.display = 'none'
        }
    })
}
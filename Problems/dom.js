var items = document.getElementsByClassName('list-group-item')

items[2].style.backgroundColor = 'green'

for(let i of items){
    i.style.fontWeight = 'bold'
}
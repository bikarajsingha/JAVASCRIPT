/*var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input')
input.value = 'Hello world'

var submit = document.querySelector("input[type='submit']")
submit.value = 'SEND'

var item = document.querySelector('.list-group-item')
item.style.color = 'red'

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'coral'

// querySelector //
var titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = 'hello'*/

/*let item = document.querySelectorAll('.list-group-item')
item[1].style.color = 'green'

let oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)')

for(let i of oddItems)
    i.style.backgroundColor = 'green'*/

var itemList = document.querySelector('#items')
itemList.parentElement.style.backgroundColor = '#f4f4f4'

itemList.children[1].style.backgroundColor = 'yellow'

console.log(itemList.firstChild)

console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello 1'

console.log(itemList.lastChild)

console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = 'Hello 2'

console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)
console.log(itemList.previousSibling)
itemList.previousElementSibling.style.color = 'green'

let newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'helloId'
newDiv.setAttribute('title', 'hello Div')

var newDivText = document.createTextNode('HELLo World')
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

container.insertBefore(newDiv, h1)

let newp = document.createElement('p')
let newPText = document.createTextNode('HELLo World')
newp.appendChild(newPText)

var ul = document.querySelector('ul')
var li = document.querySelector('li')
ul.insertBefore(newp, li)

console.log(newp)



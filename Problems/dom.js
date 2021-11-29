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

let item = document.querySelectorAll('.list-group-item')
item[1].style.color = 'green'

let oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)')

for(let i of oddItems)
    i.style.backgroundColor = 'green'
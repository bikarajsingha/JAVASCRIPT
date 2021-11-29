//2
// Examine the document object //
// console.dir(document)

console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title = '12345'
console.log(document.doctype)
console.log(document.all)
console.log(document.all[10])
//document.all[10].textContent ='hello'
console.log(document.forms)
console.log(document.images)
console.log(document.links)

//GetElement
let headerTitle = document.getElementById('header-title')
let header = document.getElementById('main-header')
//console.log(headerTitle)
//headerTitle.textContent = 'Hello'
//headerTitle.style.borderBottom = 'solid 3px #000'

header.style.borderBottom = 'solid 3px #000'

//3
let listHeader = document.getElementsByClassName('title')
listHeader[0].style.color = 'green'
listHeader[0].innerText = 'ADD ITEM'
let submit = document.querySelector('input[type="submit"]')

submit.addEventListener('click', storeLocal)

function storeLocal(e){
    e.preventDefault();

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    let obj = {
        'name': name,
        'email': email
    }
    objSerialize = JSON.stringify(obj)
    localStorage.setItem('objItem', objSerialize)
}

function viewStorage(){
    let obj = JSON.parse(localStorage.getItem('objItem'))

    let p = document.createElement('p')
    p.appendChild(document.createTextNode(obj.name+' '+obj.email))
    p.className = 'btn'

    let body = document.querySelector('body')
    body.appendChild(p)
}

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
    let objSerialize = JSON.stringify(obj)
    localStorage.setItem('user '+name, objSerialize)

    let objDeserialize = JSON.parse(localStorage.getItem('user '+name))
    let li = document.createElement('li')
    
    li.appendChild(document.createTextNode(objDeserialize.name+' '+objDeserialize.email))
    
    let form = document.querySelector('form')
    form.appendChild(li)

}


window.addEventListener('DOMContentLoaded', (e) => {
    for(let key in localStorage){
        let li = document.createElement('li')
        let objDeserialize = JSON.parse(localStorage[key])
    
        if(objDeserialize.name == undefined)
            break
    
        li.appendChild(document.createTextNode(objDeserialize.name+' '+objDeserialize.email))
    
        let form = document.querySelector('form')
        form.appendChild(li)
    }
})

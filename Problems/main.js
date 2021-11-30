let submit = document.querySelector('input[type="submit"]')

let editBtn = document.createElement('button')
editBtn.appendChild(document.createTextNode('E'))

let delBtn = document.createElement('button')
delBtn.appendChild(document.createTextNode('X'))

submit.addEventListener('click', storeLocal)

function storeLocal(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    if(localStorage.getItem('user '+name)){
        localStorage.removeItem('user '+name)
    }
    let obj = {
        'name': name,
        'email': email
    }
    let objSerialize = JSON.stringify(obj)
    localStorage.setItem('user '+name, objSerialize)

    
    let objDeserialize = JSON.parse(localStorage.getItem('user '+name))

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(objDeserialize.name+' '+objDeserialize.email))
    
    delBtn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.removeItem('user '+name)

        let form = document.querySelector('form')
        let item = e.target.parentElement

        form.removeChild(item)
    })

    editBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let form = document.querySelector('form')
        let item = e.target.parentElement

        form.removeChild(item)
    })

    li.appendChild(editBtn)
    li.appendChild(delBtn)

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

        delBtn.addEventListener('click', (e) => {
            e.preventDefault()
            localStorage.removeItem(key)
    
            let form = document.querySelector('form')
            let item = e.target.parentElement
    
            form.removeChild(item)
        })
        
        editBtn.addEventListener('click', (e) => {
            e.preventDefault()
            
            let inputName = document.getElementById('name')
            let inputEmail  = document.getElementById('email')

            

            let form = document.querySelector('form')
            let item = e.target.parentElement
    
            form.removeChild(item)
        })

        li.appendChild(editBtn)
        li.appendChild(delBtn)

        let form = document.querySelector('form')
        form.appendChild(li)
    }
})

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
    
    let obj = {
        'name': name,
        'email': email
    }
    
    axios.post('https://crudcrud.com/api/57b4ab41bac14b47963a25d21bdf0dad/appointmentData', obj)
     .then(response => console.log(response))
     .catch(err => console.log(err))
}


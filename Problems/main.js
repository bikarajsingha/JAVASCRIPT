let submit = document.querySelector('input[type="submit"]')
let editBtn = document.createElement('button')
let delBtn = document.createElement('button')


submit.addEventListener('click', storeCrud)

function storeCrud(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    let obj = {
        'name': name,
        'email': email
    }
    
    axios.post('https://crudcrud.com/api/43432d411b934e04badf98754deaeb0f/appointmentData', obj)
     .then(response => console.log(response))
     .catch(err => console.log(err))
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/43432d411b934e04badf98754deaeb0f/appointmentData')
     .then(res => {
         for(let i of res.data){
             showNewUserOnScreen(i)
         }
     })
     .catch(err => console.log(err))
})

function showNewUserOnScreen(user){  
    let form = document.querySelector('#users')
    let childHtml = `<li id=${user.email}>${user.name} ${user.email}
                        <button onclick=deleteUser('${user.email}')>Edit User</button>
                        <button onclick=editUserDetails('${user.email}')>Delete User </button>
                    <li>`

    form.innerHTML += childHtml
}
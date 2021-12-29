let submit = document.querySelector('input[type="submit"]')


submit.addEventListener('click', storeCrud)


function storeCrud(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    let obj = {
        'name': name,
        'email': email
    }
    
    axios.post('https://crudcrud.com/api/315078620fcc421283d3cb30e278052e/appointmentData', obj)
     .then(response => console.log(response))
     .catch(err => console.log(err))
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/315078620fcc421283d3cb30e278052e/appointmentData')
     .then(res => {
         for(let i of res.data){
             showNewUserOnScreen(i)
         }
     })
     .catch(err => console.log(err))
})

function showNewUserOnScreen(user){  
    let form = document.querySelector('#users')
    let childHtml = `<li id=${user['_id']}>${user.name} ${user.email}
                        <button onclick="editUser(${user['_id']})">Edit User</button>
                        <button onclick="deleteUser(event, '${user['_id']}')">Delete User </button>
                    <li>`

    form.innerHTML += childHtml
}

function deleteUser(e, id){
    e.preventDefault()
    axios.delete('https://crudcrud.com/api/315078620fcc421283d3cb30e278052e/appointmentData/'+id)
     .then(() => {
         document.getElementById(id).remove()
     })
     .catch(err => console.log(err))
}
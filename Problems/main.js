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
    
    axios.post('https://crudcrud.com/api/90ddb9c608de44ea8b76e1a8c55eeac3/appointmentData', obj)
     .then(response => {
         showNewUserOnScreen(response.data)
     })
     .catch(err => console.log(err))
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/90ddb9c608de44ea8b76e1a8c55eeac3/appointmentData')
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
                        <button onclick="editUser(event, '${user['_id']}', '${user.name}', '${user.email}')">Edit User</button>
                        <button onclick="deleteUser(event, '${user['_id']}')">Delete User </button>
                    <li>`

    form.innerHTML += childHtml
}

function deleteUser(e, id){
    e.preventDefault()
    axios.delete('https://crudcrud.com/api/90ddb9c608de44ea8b76e1a8c55eeac3/appointmentData/'+id)
     .then(() => {
         document.getElementById(id).remove()
     })
     .catch(err => console.log(err))
}

function editUser(e, id, userName, userEmail){
    e.preventDefault()
    let nameElement = document.getElementById('name')
    let emailElement = document.getElementById('email')

    nameElement.value = userName
    emailElement.value = userEmail

    deleteUser(window.event, id)
}
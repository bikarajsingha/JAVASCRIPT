let submit = document.querySelector('input[type="submit"]')


submit.addEventListener('click', storeCrud)


function storeCrud(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    let obj = {
        name: name,
        email: email
    }
    console.log(obj)
    axios.post('http://localhost:3000/addnewusers', obj)
     .then(response => {
        console.log('sent post request')
        showNewUserOnScreen(response.data)
     })
     .catch(err => console.log('Post add new user err: ',err))
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:3000/getusers')
     .then(res => {
         for(let i of res.data){
             showNewUserOnScreen(i)
         }
     })
     .catch(err => console.log('Show user err: ',err))
})

function showNewUserOnScreen(user){  
    let form = document.querySelector('#users')
    let childHtml = `<li id=${user['id']}>${user.name} ${user.email}
                        <button onclick="editUser(event, '${user['id']}', '${user.name}', '${user.email}')">Edit User</button>
                        <button onclick="deleteUser(event, '${user['id']}')">Delete User </button>
                    <li>`

    form.innerHTML += childHtml
}

function deleteUser(e, id){
    e.preventDefault()
    axios.post('http://localhost:3000/deleteuser/'+id)
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
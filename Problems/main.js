let submit = document.querySelector('input[type="submit"]')

submit.addEventListener('click', storeLocal)

function storeLocal(e){
    e.preventDefault();

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
}

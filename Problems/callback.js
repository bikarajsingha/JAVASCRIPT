const posts = [
    {title: 'Post one', body: 'This is post one', lastEditedTime: new Date("2021-12-22T15:35:58.000Z")},
    {title: 'Post two', body: 'This is post two', lastEditedTime: new Date("2021-12-23T12:35:58.000Z")}
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title} - ${post.lastEditedTime}</li>`
        })
        document.body.innerHTML = output
    }, 0);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

function create4thPost(callback) {
    callback({title: 'Post four', body: 'This is post four', lastEditedTime: new Date()}, getPosts)
    
}

createPost({title: 'Post three', body: 'This is post three', lastEditedTime: new Date("2021-12-24T17:35:58.000Z")}, getPosts)
create4thPost(createPost)

function lastEditedInSecondsAgo(){
    let li = document.createElement('li')
    let content = document.createTextNode(`${Math.floor((new Date().getTime()/1000)-(posts[posts.length-1].lastEditedTime.getTime()/1000))} seconds ago`)
    li.appendChild(content)
    document.body.appendChild(li)
}

setInterval(lastEditedInSecondsAgo, 3000)

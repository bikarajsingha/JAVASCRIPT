const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

function create4thPost(callback) {
    callback({title: 'Post four', body: 'This is post four'}, getPosts)
}

createPost({title: 'Post three', body: 'This is post three'}, getPosts)
create4thPost(createPost)

function getLastEditTime(obj){
    obj['Last Edited'] = Date()
}

for(let i in posts){
    getLastEditTime(posts[i])
}


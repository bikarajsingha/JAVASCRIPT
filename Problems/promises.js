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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false
            if(!error) {
                resolve();
            }else {
                reject('Error: Something went wrong')
            }
        }, 0)  
    })
}

createPost({title: 'Post three', body: 
'This is post three'}).then(getPosts).catch(err => console.log(err))

function getLastEditTime(obj){
    obj['Last Edited'] = Date()
}

for(let i in posts){
    getLastEditTime(posts[i])
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length == 0){
                reject('Array is empty now')
            }else {
                resolve()
            }
        }, 1000)
    })
}

const timerId = setInterval(() => {
    deletePost().then(() =>{
        posts.pop()
        let lastPost = document.querySelector('body').lastChild
        lastPost.parentElement.removeChild(lastPost)
    }).catch(err => {
        console.log(err)
        clearInterval(timerId)
    })
}, 2000)

const promise1 = Promise.resolve('hello world')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'goodbye')
})

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values)
})

const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        posts[posts.length-1]['Last Edited'] = Date()
    }, 1000)
})



const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
]

console.log('person1: shows ticket')
console.log('person2: shows ticket')

const createNDeletePost = async (post) => {
    const createPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(post) resolve(post)
            else reject('Error: something went wrong')
        }, 1000)
    })
    
    await createPost.then((m) => posts.push(m)).catch((m) => console.log(m))
    console.log(posts)

    const deletePost = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0) resolve()
            else reject('Array is empty')
        }, 1000)
    })

    await deletePost.then(() => console.log(`${posts.pop()} is removed`)).catch((m) => console.log(m))
    console.log(posts)
}
createNDeletePost({title: 'Post three', body: 'This is post three'})

/*const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tickettt')
        }, 3000)
    })

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcornnn`))
    const getButter = new Promise((resolve, reject) => resolve(`butterrr`))
    const getColdDrinks = new Promise((resolve, reject) => resolve(`cold drinksss`))

    let ticket = await promiseWifeBringingTicks
 
    console.log(`wife: i have the ${ticket}`)
    console.log(`husband: we should go in`)
    console.log('wife: no i am hungry')
     
    let popcorn = await getPopcorn

    console.log(`husband: i got some ${popcorn}`)
    console.log(`husband: we should go in`)
    console.log(`wife: I need butter on my popcorn`)

    let butter = await getButter

    console.log(`husband: i got some ${butter}`)
    console.log(`husband: anything else`)
    console.log(`wife: lets go we are getting late`)
    console.log(`husband: thank you for the reminder *grins*`)

    let coldDrinks = await getColdDrinks

    console.log(`husband: suprise i brought ${coldDrinks} too`)

    return ticket
}

preMovie().then((m) => console.log(`person3: shows ${m}`))*/
/*
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
    }, 3000)
})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log(`wife: i have the tics`)
    console.log(`husband: we should go in`)
    console.log('wife: no i am hungry')
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((t) => {
    console.log(`husband: i got some popcorn`)
    console.log(`husband: we should go in`)
    console.log(`wife: I need butter on my popcorn`)
    return new Promise((resolve, reject) => resolve(`${t} butter`))
})

const getColdDrinks = getButter.then((t) => {
    console.log(`husband: here they are`)
    return new Promise((resolve, reject) => resolve(`${t} cold drinks`))
})

getColdDrinks.then((t) => console.log(t))
/*getButter.then((t) => {
    console.log(t)
})*/
console.log('person4: shows ticket')
console.log('person5: shows ticket')
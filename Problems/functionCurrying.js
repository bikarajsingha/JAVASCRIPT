//Currying with closure

let add = function(x){
    return function(y){
        console.log(x + y)
    }
}

let addCurr = add(5)
addCurr(3)

//Currying with bind

let multiply = function(x, y){
    console.log(x * y)
}

let multiplyCurr = multiply.bind(this, 2)
multiplyCurr(5)
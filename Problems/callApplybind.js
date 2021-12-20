//Call

var obj = {
    num: 2
}

var addToThis = function(a, b, c){
    return this.num + a + b + c
}

console.log(addToThis.call(obj, 1, 2, 3))

//Apply

var arr = [4, 5, 6]
console.log(addToThis.apply(obj, arr))

//Bind

var bound = addToThis.bind(obj)
console.log(bound(1, 3, 5))

//4

var student = {
    age: 20
}

var print = function(){
    console.log(this.age)
}

var bound2 = print.bind(student)
bound2()

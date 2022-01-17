//3 & 6
class Student{
    static count = 0;
    constructor(name, age, number, marks){
        this.name = name
        this.age = age
        this.number = number
        this.marks = marks
        Student.count++
    }
}

//4
function eligible(){
    return this.marks > 40 ? true : false
}

//5
let student1 = new Student('kalam', 20, 9485333473, 55)
let student2 = new Student('bikram', 21, 600873255, 90)
let student3 = new Student('eshan', 22, 948544290, 22)
let student4 = new Student('bison', 20, 7086500499, 67)
let student5 = new Student('virgin', 19, 8558957538, 35)


//6
function track(){
    return Student.count
}


//part 2 question2
function eligibleForPlacements(minMarks, minAge){
    return () => {
        return this.marks > minMarks ? this.age > minAge ? true : false : false
    }
}

//question3
let checkStudent1 = eligibleForPlacements.call(student1, 50, 20)
let checkStudent2 = eligibleForPlacements.call(student2, 50, 18)
let checkStudent3 = eligibleForPlacements.call(student3, 40, 18)
let checkStudent4 = eligibleForPlacements.call(student4, 50, 18)
let checkStudent5 = eligibleForPlacements.call(student5, 30, 20)

function print(flag, student){
    if(flag) return student.name
    else return false
}

console.log(print(checkStudent2(), student1))
console.log(print(checkStudent2(), student2))
console.log(print(checkStudent2(), student3))
console.log(print(checkStudent2(), student4))
console.log(print(checkStudent2(), student5))



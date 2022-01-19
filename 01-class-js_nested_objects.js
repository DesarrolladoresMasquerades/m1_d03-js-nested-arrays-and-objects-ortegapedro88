// Class code examples
const student1 = {name: "Bob", age: 17}
const student2 = {name: "Susy", age: 18}
const student3 = {name: "Ted", age: 18}


const students = [
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
]

console.log(students[students.indexOf("Susy")]) // This will not work


console.log(students[1])

const Bob = {name: "Bob", age: 17}
const Susy = {name: "Susy", age: 18}
const Ted = {name: "Ted", age: 18}

const studentsObj = {
    Bob: {name: "Bob", age: 17}
    Susy: {name: "Susy", age: 18}
    Ted: {name: "Ted", age: 18}
}
console.log(studentsObj.Susy.age)
studentsObj.hasOwnProperty("Susy")
studentsObj.hasOwnProperty("Marco")



const classroom = {
    marco: { name: "Marco", friends: [] },
    carlos: { name: "Carlos", friends: [] },
    carol: { name: "Carol", friends: [] }

}

for(const friend of classroom.carol.friends) {console.log(friend.name)}
// object type use and reuse

// object type -> :{name:string, age:number, email:string}

// object value:
//
//  const person = {
//     name: 'shah',
//     age: 21,
//     email: 'sadia@test.com'
//  }

const person:{name:string, age:number, email:string} = {
    name: 'shah',
    age: 21,
    email: 'sadia@test.com'
}

console.warn(person.age)

// Example

type objType = {course1:string, course2:string, rollno:number}

const user: objType = {
    course1: 'math',
    course2: 'eng',
    rollno: 33
}

console.warn(user.course2)


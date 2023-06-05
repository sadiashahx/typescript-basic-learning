// object type use and reuse
// object type -> :{name:string, age:number, email:string}
// object value:
//
//  const person = {
//     name: 'shah',
//     age: 21,
//     email: 'sadia@test.com'
//  }
var person = {
    name: 'shah',
    age: 21,
    email: 'sadia@test.com'
};
console.warn(person.age);
var user = {
    course1: 'math',
    course2: 'eng',
    rollno: 33
};
console.warn(user.course2);

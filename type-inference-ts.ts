// Type inference in Typescript

// ak variable apne us se idea laga leta he ke yeh number ki type he ya string etc ...

let x = 10;                     // in hover, it gives idea so its number
x = 'hi'

// by default type -> any 

let data;
data=21;
data="hello"
data=true

// specific value assign

let dataa:5 = 5;
let datab:5 = 15;              // wrong

// const vs let

// let value changes anytime, so on hover it shows number type
// const value not changed, so on hover it shows only value

let data1 = 20;
const xx = 10;
xx = 30;                       // wrong
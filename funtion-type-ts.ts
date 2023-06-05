// Function Type  -> koi bhi function ho woh jo return kerta he type, wahi function ka type hota he.

// function type -> numeric

function add() {
    return 100;                                      // return 100
}

// specific assigned function type


function addd():number {
    return 100;                                      // return 100
    // return 'hello'                                // wrong
}

// Example

function sum(x:number, y:number):number {
    return x + y;                                      
}

sum(10,20)


// Example

const i = 10;
const j = 'hi'

function summ():number {
    return i;                                      
}

summ()

// function sm():number {
//     return j;                          // wrong -> type is number                                    
// }

// sm()
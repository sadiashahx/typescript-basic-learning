// Array type

let arr:string[] = ['math', 'phy', 'node', 'js']

// let arr1:string[] = ['math', 20, 'node', 'js']                // wrong, because it has number value also, not just string

let arr3:[string,number,boolean] = ['math', 20, true]            // used, when two or three values

let arr4:any[] = ['math', 20, true]

// Example

let arr5:string[] = ['math', 'phy', 'node', 'js']

// arr5[2] = 23                                                 // wrong
arr5[2] = 'hello'                                               // right

// arr5.push(24)                                                // wrong
arr5.push('hey')                                                // right
// union type -> describes a value that can be one of several types
//               like string, array, object etc
//               used then jab we know kon kon si types aasakti hen    


let data : string | number = 10
// let dataa : string | number = true                               // wrong


// Example

function combine(a:number | string, b:number | string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    else {
        return a.toString() + b.toString();
    }
}

console.warn(combine(10, 20))
console.warn(combine('sadia', 'shah'))

// Alternate option

// use -> any 
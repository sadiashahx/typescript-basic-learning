// Type alias  -> define type like a variable and reuse it
//                1. Type alias with variable
//                2. Type alias with function params

function combineee(
    a: number | string, 
    b: number | string,                          // a, b, c, d all are same types so please define common type or alias define
    // c: number | string, 
    // d: number | string, 
    type: "as-number" | "as-string") {
    if (type === 'as-number') {
        return (+a) + (+b)
    }
    else {
        return a.toString() + b.toString();
    }
}

console.warn(combineee(10, 20, "as-number"))
console.warn(combineee('sadia', 'shah', "as-string"))

// Alias type

// Example:

type varType = string | number | undefined;

let e : varType = 10;
let f : varType = 'hello';
let g : varType = undefined;




// Literals  ->  Apply values rather than apply types to a variable or parameter

let Data:string | number = 'hello'                 // union type

// variable assign

let Dataa:'abc' | 123 = 'abc'                      // literals

// type assign

function combinee(a : number | string, b : number | string, type: "as-number" | "as-string") {
    if(type === 'as-number') {
        return (+a) + (+b)
    }
    else {
        return a.toString() + b.toString();
    }
}

console.warn(combinee(10, 20, "as-number"))
console.warn(combinee('sadia', 'shah', "as-string"))

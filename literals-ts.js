// Literals  ->  Apply values rather than apply types to a variable or parameter
var Data = 'hello'; // union type
// variable assign
var Dataa = 'abc'; // literals
// type assign
function combinee(a, b, type) {
    if (type === 'as-number') {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combinee(10, 20, "as-number"));
console.warn(combinee('sadia', 'shah', "as-string"));

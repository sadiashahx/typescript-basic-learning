// Never Type

// any function has no error, then it will return any value

// Example

function tryReturn() {
    return true;
}

console.log(tryReturn())

// output ->  true

function tryyReturn() {

}

console.log(tryyReturn())

// output ->  undefined

// Example

// never -> not return anything in function, just give error or undefined or anything else
//          by default void function, but use never if needed so then code management etc ... 

function apiError(msg, code):never {
    throw {
        message:msg, apiCode:code
    }
}

apiError('server side error', 500)
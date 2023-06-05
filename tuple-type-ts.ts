// Tuple Type

// Tuple like array but some advanced, har element ko specific type assigned 

// array

// Example

let role = ['admin', 'manager'];
let rolee:string[] = ['admin', 'manager'];
// let roleee:string[] | number[] = ['admin', 'manager', 21];                        // string and num both vaues not assigned



// tuple -> length limit kerdega, and ye bataega ke first element kis tarah ka hoga, second kis tarah ka etc

// Example

let roles:[string,string,number,boolean?] = ['admin', 'manager', 21];               // boolean? -> if boolean he tou show
roles.push(true)
roles[1] = 'hey tuple'
// roles[1] = 21                                                                    // wrong
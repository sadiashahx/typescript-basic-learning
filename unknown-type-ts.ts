// Unknown type -> jab variableki type pata na ho, kis tarah ka data a aega
//                 safe and suitable

// Example

// any means -> typescript power ko off kerdena, koi bhi data ksi bhi type ka no issues

let data1:any;

data1=10;
data1='hello';
data1=false;

let item1:string;                         // no error because data1 has any type, so again string type wil be assigned
item1 = data1  

// Example

// unknown 

let data2:unknown;

data2=10;
data2='hello';
data2=false;

let item:string;
// item = data2                         // gives error because data2 has unknown type, so again string type will not be assigned
                   
// but, solution

let data3:unknown;

data3=10;
data3='hello';
data3=false;

let item3:string;

if(typeof data3 === 'string') {
    item3 = data3;
}


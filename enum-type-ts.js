// Enum type -> one group me bht sari strings hoti hen, like role
//              A group of constant that can assign a number to your strings and make an easy comparison
// enum Role[values]
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
// har role ko value assigned, 0, 1, 2
console.warn(Role);
console.warn(Role.MANAGER);

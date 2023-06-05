// class 
var User = /** @class */ (function () {
    function User() {
    }
    // name: "";
    // email: "";
    User.prototype.addUser = function (user) {
        return ("".concat(user, " is added"));
    };
    User.prototype.removeUser = function (user) {
        return ("".concat(user, " is removed"));
    };
    return User;
}());
var User1 = new User;
// const result = User1.addUser('shah');
User1.removeUser('candy');
// console.log(result)

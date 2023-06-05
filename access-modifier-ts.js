// Access modifiers
// 1. Public
var Userr = /** @class */ (function () {
    function Userr() {
        this.name1 = "";
    }
    Userr.prototype.setName1 = function (name1) {
        this.name1 = name1;
    };
    Userr.prototype.displayName1 = function () {
        console.log(this.name1);
    };
    return Userr;
}());
var u1 = new Userr;
u1.setName1('shah');
u1.displayName1();
// output 1
// shah
// changes -> easily in public modifiers
u1.setName1('candy');
u1.displayName1();
// output 2
// candy
// x------------------------------------------------------------------------------x
// 2. Private
var User2 = /** @class */ (function () {
    function User2() {
        this.name2 = "";
    }
    User2.prototype.setName2 = function (name2) {
        this.name2 = name2;
    };
    User2.prototype.displayName2 = function () {
        console.log(this.name2);
    };
    return User2;
}());
var u2 = new User2();
u2.setName2('shah');
u2.displayName2();
// output 1
// shah
// changes -> easily in public modifiers
u2.setName2('candy');
u2.displayName2();
// output 2
// candy

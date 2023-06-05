// Access modifiers

// 1. Public

class Userr {
    name1: string;

    constructor() {
        this.name1 = "";
    }

    setName1(name1:string) {
        this.name1 = name1;
    }

    displayName1() {
        console.log(this.name1)
    }
}

const u1 = new Userr;
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

class User2 {
    private name2: string;

    constructor() {
        this.name2 = "";
    }

    setName2(name2:string) {
        this.name2 = name2;
    }

    displayName2() {
        console.log(this.name2)
    }
}

const u2 = new User2();
u2.setName2('shah');
u2.displayName2();

// output 1

// shah

// changes -> easily in public modifiers

u2.setName2('candy');
u2.displayName2();

// output 2

// candy


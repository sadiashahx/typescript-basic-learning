// class 

class User {
    // name: "";
    // email: "";

    addUser(user:any) {
        return (`${user} is added`)
    }

    removeUser(user:any) {
        return (`${user} is removed`)
    }
}

const User1 = new User;
// const result = User1.addUser('shah');
User1.removeUser('candy');
// console.log(result)
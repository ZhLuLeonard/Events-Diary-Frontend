
class User {
    constructor(userName,passWord){
        this.userName = userName;
        this.passWord = passWord;
    }
    get userName() {
        return this.userName;
    }
}

export default User;
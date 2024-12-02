class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Sankalp`
    }
    set password(value){
        this._password = value
    }
}

const Sankalp = new User("S@sankalp.in","aBs")
console.log(Sankalp.password);
console.log(Sankalp.email);


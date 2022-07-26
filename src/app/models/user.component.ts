export class User {
    private firstName :string;
    private lastName :string;
    private email :string;
    private phoneNumber :string;
    private password :string;

    constructor (firstName ?:any, lastName ?:any, email ?:any ,phoneNumber ?:any, password ?:any,) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

}
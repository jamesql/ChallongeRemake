export default class User {
    id: String;
    name: String;
    email: String;

    
    constructor(id: String, name: String, email: String) {      
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getID() : String {
        return this.id;
    }

    getName() : String {
        return this.name;
    }

    getEmail() : String {
        return this.email;
    }
}
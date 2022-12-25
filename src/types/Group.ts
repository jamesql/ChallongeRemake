import User from './User';
export default class Group {
    id: String;
    name: String;
    users: Array<User>;


    constructor(id: String, name: String, users: Array<User>) {
        this.id = id;
        this.name = name;
        this.users = users;
    }
}
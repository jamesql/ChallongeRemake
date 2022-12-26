import User from './User';
import Stats from './Stats';
import { UserStats } from './Types';
export default class Group {
    id: String;
    name: String;
    users: Array<UserStats>;
    

    constructor(name: String) {
        this.id = "";
        this.name = name;
        this.users = [];
    }

    addParticipant(user: User) : void {
        this.users.push({
            user: user,
            userStats: new Stats(user)
        });
    }

    getParticipants() : Array<UserStats> {
        return this.users;
    }


}
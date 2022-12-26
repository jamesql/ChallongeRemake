import User from '../types/User';
import Tournament from '../types/Tournament';
import { createTournament } from './Functions';
export default class Test {
    // a static list of names to use for testing
    static names: String[] = ["James", "Alex", "Mac", "Prab", "Jerry", "Shane", "Joey", 
    "Carter", "Dirk", "Jospeh", "Mike", "Michael", "Terry", "Kelly", "Kevin", "Jackson", "Sam", "Samuel", "Michael", "Gary",
    "Tyrone", "Hester", "Robert", "Bob", "Sarah", "Matt", "Nathan", "Nate", "Nathaniel", "Nathanial", "Nathanael", "Nathanael",
    "Anthony", "Tony", "Irene", "Carl", "Carlton", "Carlito", "Carlitos", "Paul", "Paulie", "Paulie Walnuts", "Jack", "Jackie", "Chris",
    "Christopher", "Frank", "Carly", "Caroline", "Carolina", "Carole", "Carol", "Carolyn", "Carolynn", "Jones", "John", "Johnathan"];
        


    // generate random names for testing from list no duplicates
    static generateRandomNames(num: number) : String[] {
        let names: String[] = [];
        for (let i = 0; i < num; i++) {
            let index = Math.floor(Math.random() * this.names.length);
            names.push(this.names[index]);
            this.names.splice(index, 1);
        }
        return names;
    }

    // generate random users for testing
    static generateRandomUsers(num: number) : Array<User> {
        let users: Array<User> = [];
        let names = this.generateRandomNames(num);
        for (let i = 0; i < num; i++) {
            users.push(new User(names[i], names[i], names[i]));
        }
        return users;
    }

    static generateSingleElimination(num: number) : Tournament {
        let users: Array<User> = this.generateRandomUsers(num);
        let tournament = createTournament("Single Elimination","", new Date(), "Test Location", "single", "single");
        // add users
        for (let i = 0; i < users.length; i++) {
            tournament.addParticipant(users[i]);
        }

        tournament.generateSingleElimination();
        console.log(tournament);
        return tournament;
    }
}
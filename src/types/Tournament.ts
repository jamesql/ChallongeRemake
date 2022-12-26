import Match from './Match';
import User from './User';
import { SingleOrDoubleStage, SingleOrDoubleElimination } from './Types';
import Group from './Group';
export default class Tournament {

    private id: String;
    private name: String;
    private description: String;
    private date: Date;
    private location: String;
    private matches: Array<Match>;
    private participants: Array<User>;
    private amtStage: SingleOrDoubleStage;
    private amtElim: SingleOrDoubleElimination;
    private groups: Array<Group>;
    private loserBracket: Array<Match>;
    private winnerBracket: Array<Match>;
    private loserPool: Array<User>;
    private winnerPool: Array<User>;

    constructor(id: String, name: String, description: String, date: Date, location: String, amtStage: SingleOrDoubleStage, amtElim: SingleOrDoubleElimination) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.location = location;
        this.matches = [];
        this.participants = [];
        this.amtStage = amtStage;
        this.amtElim = amtElim;
        this.groups = [];
        this.id = id;
        this.loserBracket = [];
        this.winnerBracket = [];
        this.loserPool = [];
        this.winnerPool = [];
    }

    addParticipant(user: User) : void {
        this.participants.push(user);
    }

    addMatch(match: Match) : void {
        this.matches.push(match);
    }

    getParticipants() : Array<User> {
        return this.participants;
    }

    getMatches() : Array<Match> {
        return this.matches;
    }

    getAmtStage() : SingleOrDoubleStage {
        return this.amtStage;
    }

    getAmtElim() : SingleOrDoubleElimination {
        return this.amtElim;
    }

    getID() : String {
        return this.id;
    }

    getName() : String {
        return this.name;
    }

    getDescription() : String {
        return this.description;
    }

    getDate() : Date {
        return this.date;
    }

    getLocation() : String {
        return this.location;
    }

    // generate starting matches for single elimination tournament
    
    generateSingleElimination() : void {
        // if there are an odd number of participants, add a bye
        if (this.participants.length % 2 !== 0) {
            this.participants.push(new User('bye', 'bye', 'bye'));
        }

        // generate matches
        for (let i = 0; i < this.participants.length; i += 2) {
            let homePlayer = this.participants[i];
            let awayPlayer = this.participants[i + 1];
            this.matches.push(new Match(this.date, this.location, homePlayer, awayPlayer, 5));
        }
    }

    // generate starting matches for double elimination tournament
    generateDoubleElimination() : void {
        // if there are an odd number of participants, add a bye
        if (this.participants.length % 2 !== 0) {
            this.participants.push(new User('bye', 'bye', 'bye'));
        }

        // generate matches
        for (let i = 0; i < this.participants.length; i += 2) {
            let homePlayer = this.participants[i];
            let awayPlayer = this.participants[i + 1];
            this.winnerBracket.push(new Match(this.date, this.location, homePlayer, awayPlayer, 5));
        }
    }

    // generate matches from losers and winners pools
    generateMatchesFromPools() : void {

        // if there are an odd number of participants, add a bye
        if (this.loserPool.length % 2 !== 0) {
            this.loserPool.push(new User('bye', 'bye', 'bye'));
        }
        if (this.winnerPool.length % 2 !== 0) {
            this.winnerPool.push(new User('bye', 'bye', 'bye'));
        }

        for (let i = 0; i < this.loserPool.length; i += 2) {
            let homePlayer = this.loserPool[i];
            let awayPlayer = this.loserPool[i + 1];
            this.loserBracket.push(new Match(this.date, this.location, homePlayer, awayPlayer, 5));
        }
        for (let i = 0; i < this.winnerPool.length; i += 2) {
            let homePlayer = this.winnerPool[i];
            let awayPlayer = this.winnerPool[i + 1];
            this.winnerBracket.push(new Match(this.date, this.location, homePlayer, awayPlayer, 5));
        }

        this.matches = [...this.winnerBracket, ...this.loserBracket];
    }

    // generate random groups from list of participants for group size n
    generateGroups(n: number) : Array<Group> {
        let participants = this.participants;
        let groupSize = Math.floor(participants.length / n);
        for (let i = 0; i < n; i++) {
            let group: Group = new Group("Group " + (i + 1) + "");
            for (let j = 0; j < groupSize; j++) {
                let randomIndex = Math.floor(Math.random() * participants.length);
                group.addParticipant(participants[randomIndex]);
                participants.splice(randomIndex, 1);
            }
            this.groups.push(group);
        }
        return this.groups;
    }

    // generate all matches for a group stage tournament
    generateGroupStage() : void {
        let groups = this.generateGroups(4);
        for (let i = 0; i < groups.length; i++) {
            let participants = groups[i].getParticipants();
            for (let j = 0; j < participants.length; j += 2) {
                let homePlayer = participants[j].user;
                let awayPlayer = participants[j + 1].user;
                this.matches.push(new Match(this.date, this.location, homePlayer, awayPlayer, 5));
            }
        }
    }

    addMatches(matches: Array<Match>) : void {
        this.matches = matches;
    }

    addGroups(groups: Array<Group>) : void {
        this.groups = groups;
    }

    addWinnerBracket(matches: Array<Match>) : void {
        this.winnerBracket = matches;
    }

    addLoserBracket(matches: Array<Match>) : void {
        this.loserBracket = matches;
    }

    addWinnerPool(users: Array<User>) : void {
        this.winnerPool = users;
    }

    addLoserPool(users: Array<User>) : void {
        this.loserPool = users;
    }

}
import User from './User';
export default class Match {
    private id: String;
    private date: Date;
    private location: String;
    private homePlayer: User;
    private awayPlayer: User;
    private winner: User | null;
    private loser: User | null;
    private decided: Boolean;
    private _homePlayerScore: number;
    private _awayPlayerScore: number;
    constructor(date: Date, location: String, homePlayer: User, awayPlayer: User) {
        this.id = "";
        this.date = date;
        this.location = location;
        this.homePlayer = homePlayer;
        this.awayPlayer = awayPlayer;
        this.winner = null;
        this.loser = null;
        this.decided = false;
        this._homePlayerScore = 0;
        this._awayPlayerScore = 0;
    }

    getID() : String {
        return this.id;
    }

    getDate() : Date {
        return this.date;
    }

    getLocation() : String {
        return this.location;
    }

    getHomePlayer() : User {
        return this.homePlayer;
    }

    getAwayPlayer() : User {
        return this.awayPlayer;
    }

    getWinner() : User | null {
        return this.winner;
    }

    getLoser() : User | null {
        return this.loser;
    }

    getDecided() : Boolean {
        return this.decided;
    }

    getHomePlayerScore() : number {
        return this._homePlayerScore;
    }

    getAwayPlayerScore() : number {
        return this._awayPlayerScore;
    }


}
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
    private maxScore: number;
    constructor(date: Date, location: String, homePlayer: User, awayPlayer: User, maxScore: number) {
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
        this.maxScore = maxScore;
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

    setHomePlayerScore(score: number) : void {
        this._homePlayerScore = score;
        this.checkIfOver();
    }

    setAwayPlayerScore(score: number) : void {
        this._awayPlayerScore = score;
        this.checkIfOver();
    }

    setWinner(winner: User) : void {
        this.winner = winner;
    }

    setLoser(loser: User) : void {
        this.loser = loser;
    }

    setDecided(decided: Boolean) : void {
        this.decided = decided;
    }

    getMaxScore() : number {
        return this.maxScore;
    }

    setMaxScore(maxScore: number) : void {
        this.maxScore = maxScore;
    }

    // check if match is over
    isOver() : Boolean {
        return this._homePlayerScore === this.maxScore || this._awayPlayerScore === this.maxScore;
    }

    // check if match is over and set winner and loser
    checkIfOver() : void {
        if (this._homePlayerScore === this.maxScore) {
            this.winner = this.homePlayer;
            this.loser = this.awayPlayer;
            this.decided = true;
        } else if (this._awayPlayerScore === this.maxScore) {
            this.winner = this.awayPlayer;
            this.loser = this.homePlayer;
            this.decided = true;
        }
    }


}
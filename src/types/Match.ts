import User from './User';
import Score from './Score';
export default class Match {
    private id: String;
    private date: Date;
    private location: String;
    private homePlayer: User;
    private awayPlayer: User;
    private winner: User | null;
    private loser: User | null;
    private decided: Boolean;
    private score: Score;
    constructor(id: String, date: Date, location: String, homePlayer: User, awayPlayer: User) {
        this.id = id;
        this.date = date;
        this.location = location;
        this.homePlayer = homePlayer;
        this.awayPlayer = awayPlayer;
        this.winner = null;
        this.loser = null;
        this.decided = false;
        this.score = new Score(this);
    }

}
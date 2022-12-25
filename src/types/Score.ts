import Match from './Match';
export default class Score {

    private _match: Match;
    private _homePlayerScore: Number;
    private _awayPlayerScore: Number;
    
    constructor(match: Match) {
        this._match = match;
        this._homePlayerScore = 0;
        this._awayPlayerScore = 0;
    }
};
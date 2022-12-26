import User from './User';
export default class Stats {
    private id: String;
    private user: User;
    private wins: number;
    private losses: number;
    private winPercentage: number;
    private totalPoints: number;
    private totalLossPoints: number;
    private totalGames: number;
    
    constructor(user: User) {
        this.id = "";
        this.user = user;
        this.wins = 0;
        this.losses = 0;
        this.winPercentage = 0;
        this.totalPoints = 0;
        this.totalLossPoints = 0;
        this.totalGames = 0;
    }

    addWin(points: number, totalGames: number) : void {
        this.wins++;
        this.totalPoints += points;
        this.totalGames += totalGames;
        this.winPercentage = this.wins / this.totalGames;
    }

    addLoss(points: number, totalGames: number) : void {
        this.losses++;
        this.totalLossPoints += points;
        this.totalGames += totalGames;
        this.winPercentage = this.wins / this.totalGames;
    }
};
import Match from './Match';
import User from './User';
export default class Tournament {
    
    private id: String;
    private name: String;
    private description: String;
    private date: Date;
    private location: String;
    private matches: Array<Match>;
    private participants: Array<User>;
    

}
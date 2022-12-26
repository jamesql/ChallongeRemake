import Tournament from '../types/Tournament';
import Snowflake from './Snowflake';
import { SingleOrDoubleElimination, SingleOrDoubleStage } from '../types/Types';

export const createTournament = (name: String, description: String, date: Date, location: String, amtStage: SingleOrDoubleStage, amtElim: SingleOrDoubleElimination) : Tournament => {
    const new_id = Snowflake.generate();
    return new Tournament(new_id, name, description, date, location, amtStage, amtElim);
};
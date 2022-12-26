import Stats from './Stats';
import User from './User';
export type SingleOrDoubleStage = "single" | "double";
export type SingleOrDoubleElimination = "single" | "double";
export type StageType = "group" | "elimination" | "final";

export type UserStats = {
    user: User,
    userStats: Stats
};
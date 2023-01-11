import { DirectionEnum } from "../enams/enams";

export interface Message {
    id: string;
    name: string;
    message: string;
    date: string;
    time: number;
}

export interface SortData {
    field: string;
    direction: DirectionEnum;
}
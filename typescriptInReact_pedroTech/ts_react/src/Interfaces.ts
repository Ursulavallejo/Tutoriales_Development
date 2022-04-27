import {HairColor} from './Enums'

export interface User {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
    // getName: (name: string) => string;
}
import { Floor } from './floor.model';

export class Building {
    id: string;
    name: string;
    streetname: string;
    buildingnumber: number;
    floors: Floor[];
}

import { Floor } from './floor.model';

export class Building {
    id: String;
    name: String;
    streetName: String;
    buildingNumber: String;
    floors: Floor[];
}

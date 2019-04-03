import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiService } from './core-api';
import { Floor } from '../models/floor.model';

@Injectable({
  providedIn: 'root'
})
export class FloorService {
  public floor: Floor;

  constructor(private api: CoreApiService) {
  }

  getFloor(buildingId: String, floorId: String): Observable<Floor> {
      return this.api.get<Floor>(`/floor/${buildingId}/${floorId}`);
  }
  // Maybe for future use
//     "floor": [
//         {
//         "id": "1",
//         "Floors": [
//             {
//                 "floor": "0",
//                 "Classrooms":[
//                     {"Classcode":"0.063"},
//                     {"Classcode":"0.019"}
//                 ]
//             },
//             {
//                 "floor": "1",
//                 "Classrooms":[
//                     {"Classcode":"1.034"},
//                     {"Classcode":"1.012"},
//                     {"Classcode":"1.054"},
//                     {"Classcode":"1.076"}
//                 ]
//             },
//             {
//                 "floor": "2",
//                 "Classrooms":[
//                     {"Classcode":"2.045"},
//                     {"Classcode":"2.078"}
//                 ]
//             },
//             {
//                 "floor": "3",
//                 "Classrooms":[
//                     {"Classcode":"3.023"},
//                     {"Classcode":"3.064"},
//                     {"Classcode":"3.098"}
//                 ]
//             },
//             {
//                 "floor": "4",
//                 "Classrooms":[
//                     {"Classcode":"4.062"},
//                     {"Classcode":"4.034"},
//                     {"Classcode":"4.087"}
//                 ]
//             },
//             {
//                 "floor": "5", 
//                 "Classrooms":[
//                     {"Classcode":"5.053"},
//                     {"Classcode":"5.017"}
//                 ]
//             },
//             {
//                 "floor": "6",
//                 "Classrooms":[
//                     {"Classcode":"6.054"},
//                     {"Classcode":"6.082"}
//                 ]
//             }
//         ]
//         },
//         {
//         "id": "2",
//             "Floors":[{
//                 "floor": "0",
//                 "Classrooms":[
//                 ]
//             },
//             {
//                 "floor": "1",
//                 "Classrooms":[
//                     {"Classcode":"1.223"},
//                     {"Classcode":"1.443"},
//                     {"Classcode":"1.123"},
//                     {"Classcode":"1.656"},
//                     {"Classcode":"1.542"},
//                     {"Classcode":"1.763"},
//                     {"Classcode":"1.986"},
//                     {"Classcode":"1.164"}
//                 ]
//             },
//             {
//             "floor": "2",
//             "Classrooms":[
//                 {"Classcode":"2.223"},
//                 {"Classcode":"2.443"},
//                 {"Classcode":"2.123"},
//                 {"Classcode":"2.656"},
//                 {"Classcode":"2.542"},
//                 {"Classcode":"2.763"},
//                 {"Classcode":"2.986"},
//                 {"Classcode":"2.164"}
//             ]
//         }
//     ]
// }
// ],

}

// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable, EMPTY } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { catchError, map} from 'rxjs/operators';
// import { Classroom } from '../models/classroom.model';
// import { ClassroomService } from '../api/classroom.service';

// @Injectable({
//     providedIn: 'root'
//   })
// export class ClassroomResolverService implements Resolve<Classroom> {

//     constructor(private classroomService: ClassroomService) {
//     }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Classroom> {
//         return this.classroomService.getClassroomBycode(route.params.classcode).pipe(map((data) => {
//             return data;
//         }), catchError(error => {
//             console.log(error);
//             return EMPTY;
//         }));
//     }
// }

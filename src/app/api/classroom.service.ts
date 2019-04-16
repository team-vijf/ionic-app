import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/Classroom.model';
import { CoreApiService } from './core-api';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  public classroom: Classroom;

  constructor(private api: CoreApiService) {
  }
  getClassroomBycode(id: string): Observable<Classroom> {
    return this.api.get<Classroom>(`/occupation/classroom/${id}`);
  }


}

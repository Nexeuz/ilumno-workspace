import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../redux';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';
import { addPrograms } from '../../redux/program/program.actions';
import {Program} from '../../redux/program/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private store: Store<State>,
              private http: HttpClient) {
  }


  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(`${environment.host}/programas`)
      .pipe(
        tap(programs => {
          this.store.dispatch(addPrograms({ programs }));
        })
      );
  }

}


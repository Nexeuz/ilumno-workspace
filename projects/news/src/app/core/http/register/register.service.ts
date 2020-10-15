import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterBody} from '../../interfaces/register-body';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  setRegister(body: RegisterBody): Observable<any> {
    return this.http.post<any>(`${environment.host}/registro`,
      {...body}
      );
  }
}

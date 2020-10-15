import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {New} from '../../redux/news/new.model';
import {State} from '../../redux';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';
import {addNews} from '../../redux/news/new.actions';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private store: Store<State>,
              private http: HttpClient) { }

  getNews(): Observable<New[]> {
    return this.http.get<New[]>(`${environment.host}/noticias`)
      .pipe(
        tap(news => {
          this.store.dispatch(addNews({ news }));
        })
      );
  }
}

import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../core/redux';
import {Observable} from 'rxjs';
import {New} from '../../core/redux/news/new.model';
import {selectAllNews} from '../../core/redux/news/new.reducer';

@Component({
  selector: 'ilum-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news$: Observable<New[]>;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.news$ = this.store.select(selectAllNews);
  }

}

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './core/redux';
import {NewsService} from './core/http/news/news.service';

@Component({
  selector: 'ilum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>,
              private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe();
  }
}

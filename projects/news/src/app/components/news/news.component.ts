import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../core/redux';
import {Observable} from 'rxjs';
import {New} from '../../core/redux/news/new.model';

@Component({
  selector: 'ilum-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() new: New;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IFilms } from 'src/app/core/interfaces/IFilms';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent implements OnInit {
  @Input() film: IFilms;
  constructor() { }

  ngOnInit() {}

}

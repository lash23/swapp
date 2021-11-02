import { Component, Input, OnInit } from '@angular/core';
import { IStarships } from 'src/app/core/interfaces/IStarships';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
})
export class StarshipCardComponent implements OnInit {
  @Input() starship: IStarships;
  constructor() { }

  ngOnInit() {}

}

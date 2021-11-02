import { Component, Input, OnInit } from '@angular/core';
import { ICharacters } from 'src/app/core/interfaces/ICharacter';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: ICharacters;
  constructor() { }

  ngOnInit() {}

}

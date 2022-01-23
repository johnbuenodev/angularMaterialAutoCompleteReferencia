import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Jogo {
  id: number;
  name: string;
}

@Component({
  selector: 'app-auto-complete-acesso-area',
  templateUrl: './auto-complete-acesso-area.component.html',
  styleUrls: ['./auto-complete-acesso-area.component.scss']
})
export class AutoCompleteAcessoAreaComponent implements OnInit {

  AutoCompleteJogoForm = new FormControl();
  filteredJogo: Observable<Jogo[]>;

  jogos: Jogo[] = [
    {
      "id": 1,
      "name": "Rockman 1",
    },
    {
      "id": 2,
      "name": "Rockman 2",
    },
    {
      "id": 3,
      "name": "Rockman 3",
    },
    {
      "id": 4,
      "name": "Megaman x",
    },
    {
      "id": 5,
      "name": "Kirby",
    },
    {
      "id": 6,
      "name": "Bomber man",
    },
    {
      "id": 7,
      "name": "Jurrasic Park",
    },
    {
      "id": 8,
      "name": "Bomber man 2",
    },
    {
      "id": 9,
      "name": "Sonic 1",
    },
    {
      "id": 10,
      "name": "Super mario RPG",
    },
  ];

  constructor() {
    this.filteredJogo = this.AutoCompleteJogoForm.valueChanges.pipe(
      startWith(''),
      map(jogo => jogo ? this._filterJogo(jogo) : this.jogos.slice())
    );
  }

  ngOnInit(): void {

  }

  public _filterJogo(value: string): Jogo[] {
    const filterValue = value.toLowerCase();

    return this.jogos.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
  }

}





import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auto-complete-jogos-basic',
  templateUrl: './auto-complete-jogos-basic.component.html',
  styleUrls: ['./auto-complete-jogos-basic.component.scss']
})
export class AutoCompleteJogosBasicComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['The messenger', 'HuntDown', 'Shovel knight'];

  constructor() { }

  ngOnInit(): void {
  }

}

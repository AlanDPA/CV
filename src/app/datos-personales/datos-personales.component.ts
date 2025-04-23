import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  imports: [],
  templateUrl: './datos-personales.component.html',
})
export class DatosPersonalesComponent {
  information:string[] = [
    'Av. Los Pinos 1409',
    'Comas, Lima',
    '+51 967 497 471',
    'alanag1303@gmail.com'
  ]
}

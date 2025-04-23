import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades-tecnicas',
  imports: [],
  templateUrl: './habilidades-tecnicas.component.html',
})
export class HabilidadesTecnicasComponent {

  title = 'Habilidades Técnicas'

  skills: string[] = [
    'HTML', 
    'CSS', 
    'JavaScript',
    'Astro',
    'Angular',
    'Firebase',
    'Python'
  ];
}

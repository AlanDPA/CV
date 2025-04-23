import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  imports: [],
  templateUrl: './experiencia-laboral.component.html',
  styles: ``
})
export class ExperienciaLaboralComponent {
  title = 'Experiencia Laboral'
  company = 'Goodyear Perú'
  activities:string[] = [
    'Creación en equipo de piezas automotrices bajo los estándares de calidad.',
    'Capacitación en situaciones de incidentes y accidentes en el trabajo.',
    'Manejo de lista de chequeo de herramientas, estado de máquinas, stock de materiales previo al turno.'
  ]
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosPersonalesComponent } from "./datos-personales/datos-personales.component";
import { HabilidadesTecnicasComponent } from "./habilidades-tecnicas/habilidades-tecnicas.component";
import { EducacionComponent } from "./educacion/educacion.component";
import { ExperienciaLaboralComponent } from "./experiencia-laboral/experiencia-laboral.component";

@Component({
  selector: 'app-root',
  imports: [DatosPersonalesComponent, HabilidadesTecnicasComponent, EducacionComponent, ExperienciaLaboralComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  my_name = 'Alan Angulo';
  profession = 'Desarrollador Frontend Junior'
  introduction = 'Estudiante de diseño y desarrollo de software con experiencia en la creación de páginas web responsivas con integración de base de datos mediante el uso servicios en la nube además del uso de entornos de desarrollo que permiten tener una buena experiencia de usuario, así como el manejo de lenguajes para la solución de problemas algorítmicos.'
}

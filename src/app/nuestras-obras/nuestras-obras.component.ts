import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nuestras-obras',
  standalone: true,
  templateUrl: './nuestras-obras.component.html',
  styleUrls: ['./nuestras-obras.component.css'],
  imports: [CommonModule]
})
export class NuestrasObrasComponent {
  obras = [
    {
      titulo: 'Invisible Digital',
      descripcion: 'Una joven relata que fue víctima de violencia y maltrato por parte de sus padres durante toda su infancia. Donde, además transformara esa violencia en bullying hacia sus compañeros.',
      nivel: 'Nivel Primario',
      formato: 'Digital',
      duracion: '30 minutos'
    },
    {
      titulo: 'Toxico',
      descripcion: 'Una pareja de adolescentes que naturaliza sus malas actitudes cotidianas y no se dan cuenta como eso los terminara afectando.',
      nivel: 'Nivel Secundario',
      formato: 'Digital y Presencial',
      duracion: '45 minutos'
    },
    {
      titulo: 'Me conecto luego existo',
      descripcion: 'La vida de Carlitos un joven adolescente inseguro con miedos a temas relacionados al desarrollo adolescente y adicto a las redes sociales.',
      nivel: 'Nivel Secundario',
      formato: 'Digital y Presencial',
      duracion: '45 minutos mas una charla final de 10 minutos'
    },
    {
      titulo: 'Invisible',
      descripcion: 'Un chico tímido y Adriana una joven transexual que son víctimas constantes de las burlas de Ezequiel, un conflictivo adolescente que sufre en su casa el constante maltrato.',
      nivel: 'Nivel Secundario',
      formato: 'Digital y Presencial',
      duracion: '50 minutos mas una charla final de 15 minutos'
    }
  ];
}

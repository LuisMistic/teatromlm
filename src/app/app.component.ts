import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ConocenosComponent } from './conocenos/conocenos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { AsiTrabajamosComponent } from './asi-trabajamos/asi-trabajamos.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NuestrasObrasComponent } from './nuestras-obras/nuestras-obras.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent, 
    NuestrasObrasComponent, 
    ConocenosComponent, 
    EquipoComponent, 
    AsiTrabajamosComponent, 
    TestimoniosComponent, 
    ContactosComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection: string = 'home';

  ngAfterViewInit(): void {
    // Inicializa el offcanvas de Bootstrap
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
      this.offcanvas = offcanvas;
    }
  }

  onNavItemClick(section: string): void {
    this.changeSection(section);
    this.closeOffcanvas();
  }

  changeSection(section: string): void {
    this.currentSection = section;
  }

  closeOffcanvas(): void {
    if (this.offcanvas) {
      this.offcanvas.hide(); // Cierra el offcanvas
    }
  }

  private offcanvas: bootstrap.Offcanvas | undefined;
}
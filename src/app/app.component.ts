import { Component } from '@angular/core';
import { SupabaseService } from './servicios/supabase.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pensiona-Secure';

  // Variables para la Calculadora
  monto: number = 0;
  cuotaMensual: number = 0;

  // Variables para la Cita (Líneas 101 y 105)
  fechaCita: string = '';
  horaCita: string = '';
  citaConfirmada: boolean = false;

  constructor(private supabaseService: SupabaseService) {}

  // Lógica para confirmar y guardar la cita
  async confirmarCita() {
    if (this.fechaCita && this.horaCita) {
      try {
        const datosCita = {
          fecha: this.fechaCita,
          hora: this.horaCita,
          nombre: 'Cliente Web' // Puedes añadir un input para el nombre si quieres
        };

        await this.supabaseService.agregarCita(datosCita);
        this.citaConfirmada = true;
        
      } catch (error) {
        console.error("Error al guardar:", error);
        alert("Hubo un error al conectar con la base de datos.");
      }
    } else {
      alert("Por favor, selecciona una fecha y una hora.");
    }
  }
}
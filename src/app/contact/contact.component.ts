import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  enviarContacto() {
    if (this.nombre && this.email && this.telefono && this.mensaje) {
      console.log('Datos de contacto:', {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        mensaje: this.mensaje
      });
      this.enviado = true;
      
      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        this.nombre = '';
        this.email = '';
        this.telefono = '';
        this.mensaje = '';
        this.enviado = false;
      }, 3000);
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}

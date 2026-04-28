import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  cuotaMensual: number | null = null;
  fechaCita: string = '';
  horaCita: string = '';
  citaConfirmada: boolean = false;

  confirmarCita() {
    if (this.fechaCita && this.horaCita) {
      this.citaConfirmada = true;
      setTimeout(() => {
        this.citaConfirmada = false;
        this.fechaCita = '';
        this.horaCita = '';
      }, 5000);
    }
  }

  ngAfterViewInit() {
    // Verificar que jQuery esté disponible
    if (typeof $ === 'undefined') {
      console.warn('jQuery no está disponible');
      return;
    }

    try {
      // Activar contadores animados
      if ($('[data-toggle="counter-up"]').length > 0 && $.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
          delay: 10,
          time: 2000
        });
      }

      // Inicializar date/time picker
      if ($.fn.datetimepicker) {
        $('#date').datetimepicker({ format: 'L' });
        $('#time').datetimepicker({ format: 'LT' });
      }

      // Carrusel de testimonios
      if ($(".testimonial-carousel").length > 0 && $.fn.owlCarousel) {
        $(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          margin: 30,
          dots: true,
          loop: true,
          items: 1
        });
      }

      // Botón volver arriba
      $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });

      $('.back-to-top').click((e: any) => {
        e.preventDefault();
        if ($.fn.animate) {
          $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        }
      });
    } catch (error) {
      console.error('Error en inicialización de jQuery:', error);
    }
  }
}

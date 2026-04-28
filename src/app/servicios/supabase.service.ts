import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // RECUERDA: Sustituye estas dos cadenas con tus llaves reales del panel de API
    this.supabase = createClient(
      'https://gbkalalvvcxbjdmlpktv.supabase.co/citas', // Tu URL de la captura
      'sb_publishable_wB895HTApdlf5sOQafm2hQ_KsSOFrlQ' // Tu llave larga
    );
  }

  async agregarCita(cita: any) {
    // El método .insert() espera un arreglo [] o un objeto
    const { data, error } = await this.supabase
      .from('citas')
      .insert([
        {
          nombre: cita.nombre,
          telefono: cita.telefono,
          fecha: cita.fecha,
          hora: cita.hora
          // El 'created_at' se llena solo en Supabase
        }
      ]);
    
    if (error) {
      console.error("Error de Supabase:", error.message);
      throw error;
    }
    return data;
  }
}
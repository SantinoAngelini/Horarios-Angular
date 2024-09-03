import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public nombre : string = "Santino";

  constructor() { }

  obtenerNombre(): string{
    return this.nombre;
  }


}

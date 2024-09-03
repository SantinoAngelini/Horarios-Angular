import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  public variable : string = "";

  constructor (
    private servi
  )


  nombreServicio() : void{
    this.variable = this.nombreServicio.obtenerNombre();
  }
}

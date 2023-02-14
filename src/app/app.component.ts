import { Component } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  public ArregloTarjetas: Tarjeta[] = [];
  
  ngOnInit():void {

    this.ArregloTarjetas = [
      {titulo:"video1",subtitulo:"subtitulo 1",nro:1},
      {titulo:"video2",subtitulo:"subtitulo 2"},
      {titulo:"video3",subtitulo:"subtitulo 3"},
    ]
  }
}

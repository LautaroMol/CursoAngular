import { Component } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'nombre'; 
  title = 'my-dream-app';
  public ArregloTarjetas: Tarjeta[] = [];
  textPlaceHolder = "escriba su nombre";
  deshabilitado = true;
  
  ngOnInit():void {
    this.ArregloTarjetas = [
      {titulo:"video1",subtitulo:"subtitulo 1",image:"https://steamuserimages-a.akamaihd.net/ugc/2024961644120991619/420213DC1E3B88834BCB2A1028C8C72406FE459D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"},
      {titulo:"video2",subtitulo:"subtitulo 2",image: "https://steamuserimages-a.akamaihd.net/ugc/2024961644120991619/420213DC1E3B88834BCB2A1028C8C72406FE459D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"},
      {titulo:"video3",subtitulo:"subtitulo 3",image:"https://steamuserimages-a.akamaihd.net/ugc/2024961644120991619/420213DC1E3B88834BCB2A1028C8C72406FE459D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"},
    ]
  }
  constructor() {
    setInterval(()=>this.nombre='nombre 2',3000) ///cambia la variable nombre a nombre 2 despues de 3 segundos
    setInterval(()=>this.deshabilitado=false,3000);
  }
}

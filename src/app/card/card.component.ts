import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image2:string = 'http://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg';
  public Titulo:string = "curso de angular con interpolacion"
  image:string=""
  @Input() dataentrante:any;
  constructor(){}
  
  ngOnInit(): void{}
}

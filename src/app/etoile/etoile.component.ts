import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';


@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnInit {

 @Input() rating:any = 0; //pour la communication pere et fils
 @Output() notify:EventEmitter<number> = new EventEmitter();// pour la communication de fils au pere par eventemitter
  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    this.notify.emit(this.rating);
  }

}

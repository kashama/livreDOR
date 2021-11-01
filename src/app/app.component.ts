import { Component, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',//permet d'utiliser ce coomposant partout dans l'application
  templateUrl: './app.component.html',// template html du composant
  styleUrls: ['./app.component.css']//partie de styles css du composant
})
export class AppComponent implements OnInit{
  title = 'LivresDOR';//proprieté de la classe AppComponent

  source$:Observable<number>=range(0, 10);
  ngOnInit(): void {
    this.source$.pipe(
      map(x=>x*4),
      filter(x=>x>15)
    ).subscribe(x=>console.log(x))
  }
  
}

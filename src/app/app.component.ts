import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//permet d'utiliser ce coomposant partout dans l'application
  templateUrl: './app.component.html',// template html du composant
  styleUrls: ['./app.component.css']//partie de styles css du composant
})
export class AppComponent {
  title = 'LivresDOR';//proprieté de la classe AppComponent
}

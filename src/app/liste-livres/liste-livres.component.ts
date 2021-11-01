import { Component, OnInit } from '@angular/core';
import { ILivre } from '../Models/livre';
import { LivreService } from '../Services/livre/livre.service';
import { CategoryService } from '../Services/Categories/category.service';


@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit{ 
  grandTitre:string="La liste des livres";
  WidthImage=60;
  HeightImage=80;
  affichage: boolean=true;
 
  livres:ILivre[]=[];


  listCategorie:string[]=[];
  categoryId:string='all';
  livreTemp:any[]=[];
  constructor(
    private serviceLivre:LivreService,
    private serviceCategorie:CategoryService
    ) {
    console.log('constructor: On cree un composant comme le premier evenement');
   }
  
  ngOnInit(): void {
    this.livres=this.serviceLivre.getAllLivres();
    this.listCategorie=this.serviceCategorie.getAllCategories();
    this.livreTemp=this.livres;
  }
  onclick(){
    this.affichage=!this.affichage
  }
  changeCategory(){
    if(this.categoryId=='all') this.livres=this.livreTemp;
    this.livres=this.livreTemp.filter(p=> p.Book_Category == this.categoryId);
  }
  onNotifying(event:number){
    alert(event);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../Services/livre/livre.service';
import { ILivre } from '../Models/livre';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private serviceLivre:LivreService
    ) { }
  livre:ILivre|undefined;

  ngOnInit(): void {
    let Book_Id = this.router.snapshot.paramMap.get('Book_Id');
    //appel de backend pour recuper les details du livre
    this.serviceLivre.getLivreById(Number(Book_Id))
      .subscribe(
        livre=>{
          this.livre=livre;
          console.log(this.livre);
        }
      )
    console.log(Book_Id);

  }

}

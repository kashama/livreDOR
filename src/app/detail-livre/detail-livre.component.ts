import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    let Book_Id=this.router.snapshot.paramMap.get('Book_Id');
    console.log(Book_Id);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course2',
  templateUrl: './course2.component.html',
  styleUrls: ['./course2.component.css']
})
export class Course2Component implements OnInit {

  NomFormation="The very exciting angular training for all"
  getAllInfos(){
    return "All informations needed are here"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

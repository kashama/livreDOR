import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses/course.component';
import { Course2Component } from './course2/course2.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';


@NgModule({
  declarations: [
    AppComponent,
    //il faut declarer chaque classe de composant ici
    CourseComponent,
    Course2Component,
    ListeLivresComponent
  ],
  imports: [
    //il faut importer chaque module necessaire ici
    BrowserModule,
    AppRoutingModule
   
  ],
  //ici il faut mettre services ici
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

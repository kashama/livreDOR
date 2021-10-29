import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { FormsModule } from '@angular/forms';
import { DeleteSpacePipe } from './pipes/delete-space.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EtoileComponent } from './etoile/etoile.component';


@NgModule({
  declarations: [
    AppComponent,
    //il faut declarer chaque classe de composant ici
    ListeLivresComponent,
    DeleteSpacePipe,
    EtoileComponent
  ],
  imports: [
    //il faut importer chaque module necessaire ici
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
   
  ],
  //ici il faut mettre services ici
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteSpacePipe } from './pipes/delete-space.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EtoileComponent } from './etoile/etoile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './Back-End/backend';


@NgModule({
  declarations: [
    AppComponent,
    //il faut declarer chaque classe de composant ici
    ListeLivresComponent,
    DeleteSpacePipe,
    EtoileComponent,
    HomeComponent,
    NotFoundComponent,
    DetailLivreComponent
  ],
  imports: [
    //il faut importer chaque module necessaire ici
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
    ReactiveFormsModule
  ],
  //ici il faut mettre services ici
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

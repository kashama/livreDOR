import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { HomeComponent } from './home/home.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'livres',component:ListeLivresComponent},
  {path:'livre/:Book_Id',component:DetailLivreComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

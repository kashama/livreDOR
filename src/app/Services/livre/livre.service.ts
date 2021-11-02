import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILivre } from '../../Models/livre';

@Injectable({
  providedIn: 'root'//root veut dire notre service peut etre utilisé partout dans notre applicaation
})
export class LivreService {

  constructor(private http:HttpClient) { }
  getAllLivres():Observable<ILivre[]>
  {
  return this.http.get<ILivre[]>('api/livres').pipe(
    map(l=>l)
  );
  
  }
  getLivreByCategory(categorie:string):Observable<ILivre[]>{
    return this.getAllLivres().pipe(
      map(x=>x.filter(p=>p.Book_Category==categorie))
    )
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  private topMovies = [{title: 'Skazani na Shawshank', director: 'Frank Darabont'},
    {title: 'Ojciec chrzestny', director: 'Francis Ford Coppola'},
    {title: 'Ojciec chrzestny II', director: 'Francis Ford Coppola'},
    {title: 'Mroczny rycerz', director: 'Christopher Nolan'},
    {title: 'Dwunastu gniewnych ludzi', director: 'Sidney Lumet'},
  ];
  private bottomMovies = [
    {title: 'Totalny kataklizm ', director: 'Jason Friedberg, Aaron Seltzer'},
    {title: 'Superdzieciaki: Geniusze w pieluchach II', director: 'Bob Clark'},
    {title: 'Kod Adi K.O.Z.', director: 'Celal Çimen'},
    {title: 'Manos - Ręce przeznaczenia', director: 'Harold P. Warren'},
    {title: 'Ptakodemia', director: 'James Nguyen'},
  ];

  constructor() { }
  public getTopMovies(): any{
    return this.topMovies;
  }
  public getBottomMovies(): any{
    return this.bottomMovies;
  }
}

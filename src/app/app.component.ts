import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMovies = [
    {title: 'Skazani na Shawshank', director: 'Frank Darabont'},
    {title: 'Ojciec chrzestny', director: 'Francis Ford Coppola'},
    {title: 'Ojciec chrzestny II', director: 'Francis Ford Coppola'},
    {title: 'Mroczny rycerz', director: 'Christopher Nolan'},
    {title: 'Dwunastu gniewnych ludzi', director: 'Sidney Lumet'},
  ];
}

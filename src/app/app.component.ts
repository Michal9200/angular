import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserData} from './model/UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  http: HttpClient;
  modelForm: any;
  obiect: UserData = new UserData();

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.modelForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      age: new FormControl(),
      country: new FormControl()
    });
    this.getFromServer();
  }

  onSubmit(): void {
    console.log(this.modelForm.value);
  }

  getFromServer(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(value => {
      this.obiect = value as UserData;
      console.log(value);
    });
  }
}

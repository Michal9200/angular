import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    this.updateOnServer();
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

  sendToServer(): void {
    const httHeader = {
      headers: new HttpHeaders({'Content-type': 'application/json ; charset=UTF-8'})
    };
    const body: UserData = {title: 'foo', body: 'bar', userId: 1} as UserData;
    this.http.post('http://jsonplaceholder.typicode.com/posts/', body, httHeader).subscribe(responde => {
      this.obiect = responde as UserData;
      console.log(responde);
    });
  }

  updateOnServer(): void {
    const httHeader = {
      headers: new HttpHeaders({'Content-type': 'application/json ; charset=UTF-8'})
    };
    const body: UserData = {title: 'foo', body: 'bar', userId: 1} as UserData;
    this.http.put('http://jsonplaceholder.typicode.com/posts/1', body, httHeader).subscribe(responde => {
      this.obiect = responde as UserData;
      console.log(responde);
    });
  }
}

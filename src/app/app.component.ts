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
  signupForm: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      userId: new FormControl(),
      body: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  loadValues(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data: { id: number, userId: number, title: string, body: string }) => {
        this.signupForm.patchValue(data);
      });
  }
}

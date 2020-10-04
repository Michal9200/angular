import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  modelForm: any;
  constructor() {}
  ngOnInit(): void {
    this.modelForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      age: new FormControl(),
      country: new FormControl()
    });
  }
  onSubmit(): void{
    console.log(this.modelForm.value);
  }
}

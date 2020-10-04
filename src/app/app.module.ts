import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyDirectiveDirective} from './my-directive.directive';
import {MyPipePipe} from './my-pipe.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './news/news.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';


const appRotes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {page: 'Home page'}
  },
  {
    path: 'news/:newsTs',
    component: NewsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MyPipePipe,
    HomeComponent,
    LoginComponent,
    NewsComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRotes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

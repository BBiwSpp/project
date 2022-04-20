import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private active: ActivatedRoute) {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        this.check_type(value.url.toString());
        if (value.url.toString() == '/') {
          this.status = false;
        } else {
          this.status = true;
          this.temp = document.getElementById(
            value.url.toString().substring(1)
          );
          // console.log('temp', this.temp);
          // console.log('status', this.status);
          if (this.temp) {
            this.temp.setAttribute('class', 'active');
            this.temp_page = this.temp;
          }
          if (this.temp == null) {
            this.temp = this.temp_page;
            this.temp.setAttribute('class', 'active');
          }
        }
      }
    });
  }
  topnav:any = 1;
  type: any = 1;
  status: any = true;
  temp: any;
  temp_page: any;
  public loading = true;
  title = 'ชมรมภายใน';
  change_page(page: any) {
    if (this.temp) {
      this.temp.removeAttribute('class');
    }
    this.router.navigate(['/' + page]);
  }

  check_type(url: any) {
    switch (url) {
      case '/': {
        this.type = 2;
        break;
      }
      case '/home': {
        this.type = 1;
        break;
      }
      case '/news': {
        this.type = 1;
        break;
      }
      case '/a-news': {
        this.type = 1;
        break;
      }
      case '/groups': {
        this.type = 1;
        break;
      }
      case '/login': {
        this.type = 1;
        break;
      }
      case '/register': {
        this.type = 1;
        break;
      }
      case '/groups-clubs': {
        this.type = 1;
        break;
      }
      case '/register-group': {
        this.type = 1;
        break;
      }
      case '/relations': {
        this.type = 1;
        break;
      }
      default: {
        this.type = 2;
        break;
      }
    }
  }
  login(){
    this.router.navigate(['/login'])
  }
  register(){
    this.router.navigate(['/register'])
  }
  setActive(value: any) {
    this.status = true;
    this.temp = document.getElementById(value.url.toString().substring(1));
    this.temp.setAttribute('class', 'active');
  }
}

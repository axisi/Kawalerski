import {Component, OnInit} from '@angular/core';
import {UserService} from './service/data/user.service';
import { Router} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ApiService} from './service/data/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Kawalerski';
  constructor(
    private userService: UserService,
    private router: Router,
    private apiService: ApiService

  ) {
  }

  ngOnInit(): void {
    /*const user = JSON.parse( localStorage.getItem('user'));*/
    const username =  localStorage.getItem('username');
    if (username){
      this.router.navigate(['welcome']);
    }else{
      this.router.navigate(['login']);
    }
  }
}

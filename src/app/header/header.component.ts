import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
    /*const isLogged = localStorage.getItem('username');
    if (isLogged !== null  ){
      this.userLoggedIn = true;
    }else{
      this.userLoggedIn = false;
    }*/
  }

  doLogout() {
    localStorage.clear();
  }
  isLoggedIn(): boolean{
    let username =  localStorage.getItem('username');
    return !(username === null);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser, UserService} from './user.service';

/*export class HelloWorldBean{
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public isActive: boolean,
    public score: number,
    public isAdmin: boolean) {
  }
}*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = '192.168.1.28';
  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  getUser(){
    return this.http.get<IUser>('http://' + this.url + ':8080/user');
  }
  getUserByName(username: string){
    return this.http.get<IUser>(`http://` + this.url + `:8080/user/${username}`);
  }
  executeAuthenticationService(username: string , password: string){
    return this.http.get<IUser>(`http://` + this.url + `:8080/user/${username}/${password}`);
  }
  getAllUsersData() {
    return this.http.get<IUser[]>('http://' + this.url + ':8080/users');
  }
  changeScore(username: string , score: number){
    return this.http.get<void>(`http://` + this.url + `:8080/user/${username}/change/${score}`);
  }
  decreaseHP(username: string){
    return this.http.get<void>(`http://` + this.url + `:8080/user/${username}/decreaseHP`);
  }
}

import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/data/api.service';
import {UserService} from '../service/data/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-roulete',
  templateUrl: './roulete.component.html',
  styleUrls: ['./roulete.component.css']
})
export class RouleteComponent implements OnInit {

  public stake = 5 ;
  canSpi: boolean;
  public result: number;
  public color: string;
  public colorString: string;
  public isWin: boolean;

  constructor(private apiService: ApiService,
              public userService: UserService,
              private router: Router) { }


  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    const username =  localStorage.getItem('username');
    this.apiService.getUserByName(username).subscribe((user) => {
      this.userService.user = user;
    });
  }


  changeStake($event: any) {
    this.stake = $event;
  }


  isSpinable(): boolean{
    if(this.userService.user.score < this.stake || this.stake === 0){
      return  false;
    }else{
      return true;
    }
  }

  red() {
    this.result = (this.getRandomInt(0, 36));
    this.checkIfWin('red');
    this.apiService.changeScore(this.userService.user.username, this.isWin ?  this.stake : -this.stake ). subscribe(() =>{
      this.getUser();
    });
  }

  green() {
    this.result = (this.getRandomInt(0, 36));
    this.checkIfWin('green');
    this.apiService.changeScore(this.userService.user.username, this.isWin ? 35 * this.stake : -this.stake). subscribe(() =>{
      this.getUser();
    });
  }

  black() {
    this.result = (this.getRandomInt(0, 36));
    this.checkIfWin('black');
    this.apiService.changeScore(this.userService.user.username, this.isWin ? this.stake : -this.stake ).subscribe(() =>{
      this.getUser();
    });

  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min;
    if(result === 0){
      this.color = 'background-color: green; color: white';
      this.colorString = 'green';
    }else{
      if(result % 2 === 0){
        this.color = 'background-color: red; color: white';
        this.colorString = 'red';
      }else{
        this.color = 'background-color: black; color: white';
        this.colorString = 'black';
      }
    }
    return result;
  }

  private checkIfWin(color: string) {
    this.isWin = color === this.colorString;

  }
}

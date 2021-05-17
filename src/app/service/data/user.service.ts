import { Injectable } from '@angular/core';
export interface IUser{
   id: number;
   username: string;
   password: string;
   active: boolean;
   score: number;
   admin: boolean;
   hp: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: IUser;
  constructor(
  ) { }


}

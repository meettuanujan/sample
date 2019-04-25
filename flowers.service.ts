import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './flowers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  //flowersUrl = 'https://jsonplaceholder.typicode.com/users';
  username = this.username;

  private _flowers: User[];

  constructor(private http: HttpClient) {
    this._flowers = [
      {
        id: 1,
        name: 'one',
        email: 'abc@gmail.com'
      },
      {
        id: 2,
        name: 'two',
        email: 'dfg@gmail.com'
      },
      {
        id: 3,
        name: 'three',
        email: 'zxc@gmail.com'
      }
    ];
  }

  getFlowers(): Observable<User[]> {
    //return this.http.get<User[]>(this.flowersUrl);
    return of(this._flowers);
  }

  addUser(newId: number, newName: string, newEmail: string): void {
    this._flowers.push({ id: newId, name: newName, email: newEmail });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private createUserurl$ = "http://localhost:3000/registeruser"
  constructor(private http$: HttpClient) { }

  createUser(userData) {
    return this.http$.post<any>(this.createUserurl$, userData);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

  testVar = 'hello test';
  constructor(private http: HttpClient) {
    console.log('init test service')
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users')
  }
}

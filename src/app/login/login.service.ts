import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(username: string | undefined | null, password: string | undefined | null): any {
    return this.httpClient.get<any[]>('/assets/data/users.json');;
  }
}

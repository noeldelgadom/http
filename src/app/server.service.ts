import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any) {
    return this.http.post('https://udemy-ng-http-d7ad9.firebaseio.com/data.json', servers);
  }
}

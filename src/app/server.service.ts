import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  storeServers(servers: any) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://udemy-ng-http-d7ad9.firebaseio.com/data.json',
    servers,
    { headers: headers });
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-d7ad9.firebaseio.com/data.json');
  }
}

import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

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
    return this.http.get('https://udemy-ng-http-d7ad9.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw(error);
        }
      );
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-d7ad9.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}

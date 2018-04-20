
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as Constant from '../../configs/constants';
import { HttpinterceptorService } from './httpinterceptor.service';

@Injectable()
export class ApiService {

  apiUrl = Constant.API_ENDPOINT;
  apiTokenKey = Constant.API_TOKEN_KEY;
  apiValue = Constant.API_TOKEN_VALUE;

  constructor(private http: HttpinterceptorService) {
    this.apiUrl = Constant.API_ENDPOINT;
    this.apiTokenKey = Constant.API_TOKEN_KEY;
  }

  get(path, params?) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append('Authorization', this.apiValue);
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      this.http.get(this.apiUrl + path, { headers: headers, params: params })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  post(path, params) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append('Authorization', '');
      headers.append('Content-Type', 'application/json');
      this.http.post(this.apiUrl + path, params, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}

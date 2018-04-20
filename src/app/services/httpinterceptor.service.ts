
import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

// operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpinterceptorService extends Http {

  constructor(
    backend: XHRBackend,
    options: RequestOptions,
    public http: Http,
  ) {
    super(backend, options);
  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {

    if (error.status === 401 || error.status === 403) {
      // will trigger the event defined earlier which did have access to the NavController
    }
    // Do messaging and error handling here

    return Observable.throw(error);
  }

}

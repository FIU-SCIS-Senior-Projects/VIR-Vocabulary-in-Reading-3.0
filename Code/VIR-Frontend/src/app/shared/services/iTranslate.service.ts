import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { iTranslation } from 'app/shared/interface/iTranslation';
import 'rxjs/add/operator/do';



@Injectable()
export class iTranslateService {


  constructor(private http: HttpClient) {
  }

  // To get translation
  getTranslation(original: string, target: string): Observable<iTranslation> {
    return this.http.get<iTranslation>(`/api/iTranslate`)
      .do((res => console.log(res)));
  }
}
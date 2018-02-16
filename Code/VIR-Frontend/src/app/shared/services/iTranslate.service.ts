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


postTranslation(original:string, target:string) {
  return this.http.post(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyBRrYO16vcORy3U8N3b_09pcs8C1EYTVG4`,
    (
      {
        'q': original,
        'target': target
      }
    ))
    .do((res => console.log(res)));
}
}
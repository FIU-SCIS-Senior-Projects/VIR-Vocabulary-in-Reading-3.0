import { Injectable, Inject, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../interface/IUser'
import 'rxjs/add/operator/do';

@Injectable()
export class RegisterService{


    constructor(private http: HttpClient) {

    }

    // To add new user to data base
    postUser(fName: string, uName: string, pass: string, ulevel:string, email:string) {
        return this.http.post(`/api/user/add`,
            (
                {
                    'fullName': fName,
                    'userName': uName,
                    'password': pass,
                    'userLevel': ulevel,
                    'email': email,
                }
            ))
            .do((res => console.log(res)));
    }

    getUser(uName: string): Observable<IUser>{
        return this.http.get<IUser>(`/api/user/${uName}`)
            .do((res => console.log(res)));
    }

}

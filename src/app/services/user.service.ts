import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.component';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        let url = "http://localhost:8080/api/getUser";
        return this.http.get<any>(url);
    }

    createUsers(user : User) {
        return this.http.post("http://localhost:8080/api/createUser",user);
    }

}
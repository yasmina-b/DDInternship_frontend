import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.component';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers():  Observable<any> {
        let url = "http://localhost:8080/api/getUser";
        return this.http.get<any>(url);
    }

    createUsers(user :Partial<{ firstname: string | null; lastname: string | null; email: string | null; phone: string | null; password: string | null}>): Observable<Object>{
        return this.http.post("http://localhost:8080/api/createUser",user);
    }

    loginUser(user : User) : Observable<any>{
        return this.http.post("http://localhost:8080/api/loginUser",user);
    }

    updateUser(userId : number, user : User): Observable<User> {
        const putUrl = "http://localhost:8080/api/updateUser" + '/' + userId;
        return this.http.put<User>(putUrl, user);
    }

}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl="http://localhost:8080/user/"
  constructor(private httpClient : HttpClient){}

  deleteUser(id:number , token: string) : Observable<User>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.delete<User>(this.apiUrl+"delete/"+id)
  }


  getUser(id:number,token:String ): Observable<any>
  {
    const headers = new HttpHeaders ({
      "Autorization" : `Bearer ${token}`
    });
    return this.httpClient.get<any>(this.apiUrl+"getUserById"+id,{headers})
  }

}

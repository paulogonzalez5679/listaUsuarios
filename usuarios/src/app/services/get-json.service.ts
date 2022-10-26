import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  url:string="https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }


  GetAllUsers(){
    return this.http.get(this.url);
  }
}

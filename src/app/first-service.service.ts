import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  firstop='raja';
  constructor(
    private http: HttpClient

  ) { }


  tabl(): Promise<any> {
    console.log('raja')
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();

    // const xml=new XMLHttpRequest();

  }
}

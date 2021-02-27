import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyRestService {

  result;

  constructor(private hc: HttpClient) { 
    
  }

  returnRESTData():Observable<any>
  {
    this.result= this.hc.get('https://jsonplaceholder.typicode.com/comments/2');
    return this.result;
  }

  getDataFromJsonServer():Observable<any>
  {
    //return this.hc.get('http://localhost:1234/students/');
    return this.hc.get('http://localhost:8080/owners/');
  }

  getDataFromJsonServerById(num):Observable<any>
  {
    return this.hc.get('http://localhost:1234/students/'+num);
  }  
  addDataToREST(stu):Observable<any>
  {
    const header = {'content-type':'application/json'}
    const body = JSON.stringify(stu);
    return this.hc.post('http://localhost:3000/students/',body,{headers:header});
  }

  updateDataToREST(num,stu)
  {
    const header = {'content-type':'application/json'}
    const body = JSON.stringify(stu);
    return this.hc.put('http://localhost:3000/students/'+num,body,{headers:header});

  }

  deleteDataInREST(num)
  {
    return this.hc.delete('http://localhost:3000/students/'+num);
  }
}

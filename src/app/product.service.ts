import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }
  saveProduct(product) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(JSON.stringify(product));
    return this.http.post(`http://localhost:3000/api/addProduct`, JSON.stringify(product), { headers: headers });
  }

  getProduct(){
    return this.http.get(`http://localhost:3000/api/getProduct`).map(data=>{return data.json()});
  }

  deleteProduct(){
    return this.http.delete(`http://localhost:3000/api/deleteProduct/1001`);
  }
}

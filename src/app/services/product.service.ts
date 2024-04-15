import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://deploy-backend-production-4592.up.railway.app/api/products';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url);
  }

  getOne(id:number) {
    return this.httpClient.get(this.url+'/'+id);
  }

  getByCategory(id:number) {
    return this.httpClient.get(this.url+'/by-category/'+id);
  }
}

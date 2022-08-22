import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    let url = 'http://localhost:8080/api/getProduct';
    return this.http.get<any>(url);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/api/deleteProductById/' + id
    );
  }

  createProducts(
    id: number,
    product: Partial<{ name: any | null; description: any | null }>
  ): Observable<Object> {
    return this.http.post(
      'http://localhost:8080/api/createProduct/' + id,
      product
    );
  }
}

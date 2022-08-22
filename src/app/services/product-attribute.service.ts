import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductAttributeService {
  constructor(private http: HttpClient) {}

  getProductAttributes(): Observable<any> {
    let url = 'http://localhost:8080/api/getProductAttribute';
    return this.http.get<any>(url);
  }

  deleteProductAttributes(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/api/deleteProductAttributeById/' + id
    );
  }

  createProductAttribute(
    productAttribute: Partial<{ name: any | null }>
  ): Observable<Object> {
    return this.http.post(
      'http://localhost:8080/api/createProductAttribute',
      productAttribute
    );
  }
}

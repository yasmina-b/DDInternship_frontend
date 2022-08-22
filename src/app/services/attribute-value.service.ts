import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttributeValueService {
  constructor(private http: HttpClient) {}

  getAttributeValues(): Observable<any> {
    let url = 'http://localhost:8080/api/getAttributeValue';
    return this.http.get<any>(url);
  }

  deleteAttributeValue(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/api/deleteAttributeValueById/' + id
    );
  }

  createAttributeValue(
    id: number,
    attributeValue: Partial<{ value: any | null }>
  ): Observable<Object> {
    return this.http.post(
      'http://localhost:8080/api/createAttributeValue/' + id,
      attributeValue
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  constructor(private http: HttpClient) {}

  getSubcategories(): Observable<any> {
    let url = 'http://localhost:8080/api/getSubcategory';
    return this.http.get<any>(url);
  }

  deleteSubcategory(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/api/deleteSubcategoryById/' + id
    );
  }

  createSubcategory(
    id: number,
    subcategory: Partial<{ name: any | null }>
  ): Observable<Object> {
    return this.http.post(
      'http://localhost:8080/api/createSubcategory/' + id,
      subcategory
    );
  }
}

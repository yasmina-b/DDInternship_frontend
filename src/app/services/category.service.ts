import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    let url = 'http://localhost:8080/api/getCategory';
    return this.http.get<any>(url);
  }

  getSubcategories(): Observable<any> {
    let url = 'http://localhost:8080/api/getSubcategory';
    return this.http.get<any>(url);
  }

  createCategories(
    category: Partial<{ name: any | null }>
  ): Observable<Object> {
    return this.http.post('http://localhost:8080/api/createCategory', category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/api/deleteCategoryById/' + id
    );
  }
}

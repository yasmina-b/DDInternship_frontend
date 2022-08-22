import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VariantService {
  constructor(private http: HttpClient) {}

  getVariant(): Observable<any> {
    let url = 'http://localhost:8080/api/getVariant';
    return this.http.get<any>(url);
  }

  createVariant(
    id: number,
    variant: Partial<{
      price: any | null;
      availableQuantity: any | null;
      addedDate: any | null;
    }>
  ): Observable<Object> {
    return this.http.post(
      'http://localhost:8080/api/createVariant/' + id,
      variant
    );
  }

  deleteVariant(id: number) {
    return this.http.delete(
      'http://localhost:8080/api/deleteVariantById/' + id
    );
  }
}

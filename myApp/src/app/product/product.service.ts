import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private backend = "http://localhost:3000"

  constructor(private http: HttpClient, private configService: ConfigService) {
    configService.loadConfig();
    console.log(configService.config);
    this.backend = configService.config?.backend || this.backend;
  }


  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.backend + '/products')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.backend + '/products', product)
      .pipe(
        catchError(this.handleError)
      );
  }

  readProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.backend + '/product/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product[]> {
    return this.http.put<Product[]>(this.backend + '/products', product)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.backend + '/product/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

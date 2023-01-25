import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';

  public data: Config | undefined;
  private default: Config = {
    backend: "http://localhost:3000"
  }

  constructor(private http: HttpClient) { }
  
  load(): Promise<Config> {
    return new Promise<Config>(resolve => {
      this.http.get(this.configUrl).subscribe(
        response => {
          console.log('using server-side configuration')
          this.data = Object.assign({}, this.default, response || {})
          resolve(this.data)
        },
        () => {
          console.log('using default configuration')
          this.data = Object.assign({}, this.default || {})
          resolve(this.data)
        }
      );
    });
  }
}

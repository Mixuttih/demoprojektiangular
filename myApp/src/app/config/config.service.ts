import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  public config : Config | undefined

  constructor(private http: HttpClient) { }
   
  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  loadConfig() {
    this.getConfig()
      .subscribe((data: Config) => this.config = {
          backend: data.backend
      });
  }
}

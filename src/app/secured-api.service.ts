import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecuredApiService {
  private httpClient: HttpClient;
  private baseURL: string = "http://localhost:9090/api";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

  }

  public requestSecuredResource(): Observable<DoubleSlash> {
    return this.httpClient.get<DoubleSlash>(this.baseURL + "/secured");
  }

  public requestUnsecuredResource(): Observable<DoubleSlash> {
    return this.httpClient.get<DoubleSlash>(this.baseURL + "/unsecured");
  }
}


export interface DoubleSlash {
  content: string;
}


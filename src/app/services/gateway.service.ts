import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient) { }
  public get<T>(url: string): Observable<T> {
    const urlApi =environment.urlVibra;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQASnZlmu7mHdIuPtG-PKtJCxzmJp_qntmWUuUhJ3NlmZHgsN67Z77gVMb3YJfz5M87kgUpQG0-6-uToGSvduGn7sbnsZNUfSqiZNWQ0GKKswyYXTgpFZYpIbU4geTlGDcMNHtrYtBf1dvhlHUCdUd9miuHy_pu02-dhPYgn2VwXNr4mSBpnQNL6i38alDz3fyIRzuezzdz83kNYF2EKmiI-xb1fdRUC7VxdxGw0EYd6665HGzL_eZ73hdHZXT7-VUhL_1SHFyiBp8smIIicRt7nOA'
      })
    };

    return this.http.get<any>(urlApi + url, httpOptions).pipe(map((r) => r));
  }

  public post<T>(url: string, data: any): Observable<T> {
    const urlApi =environment.urlVibra;
      
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.post<any>(urlApi + url, data, httpOptions).pipe(map((r) => r));
  }
}

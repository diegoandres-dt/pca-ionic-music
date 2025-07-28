import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorServiceService {

  constructor(private gatewayServices: GatewayService) { }
    
  public login(user: any): Observable<any> {
    return this.gatewayServices.post<any>(
      '/login',
      user,
    );
  }

  public registro(user: any): Observable<any> {
    return this.gatewayServices.post<any>(
      '/signup',
      user,
    );
  }
}

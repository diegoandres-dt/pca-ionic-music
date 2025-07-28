import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksServiceService {

  constructor(private gatewayServices: GatewayService) { }

  public verMusica(id: number): Observable<any> {
    return this.gatewayServices.get<any>(`tracks/artist/${id}`);
  }
}


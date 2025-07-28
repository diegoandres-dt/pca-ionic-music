import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private gatewayServices: GatewayService) { }

  public listarArtista(): Observable<any> {
    return this.gatewayServices.get<any>(`artists`);
  }
  public verArtista(id:number): Observable<any> {
    return this.gatewayServices.get<any>(`/artists/${id}`);
  }
}

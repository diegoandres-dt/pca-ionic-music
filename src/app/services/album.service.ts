import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GatewayService } from './gateway.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private gatewayServices: GatewayService) { }

  public listarAlbum(): Observable<any> {
    return this.gatewayServices.get<any>(`albums`);
  }
}

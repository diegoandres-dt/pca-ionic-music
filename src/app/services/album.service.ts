import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private gatewayServices: GatewayService) { }

  public listarAlbum(): Observable<any> {
    return this.gatewayServices.get<any>(`/me/albums`);
  }
}

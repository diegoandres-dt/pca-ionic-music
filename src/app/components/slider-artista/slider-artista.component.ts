import { Component, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-slider-artista',
  templateUrl: './slider-artista.component.html',
  styleUrls: ['./slider-artista.component.scss'],
  imports: [IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderArtistaComponent  implements OnInit {

   listaSlidesArtista:any[] = [];

  constructor(private artistService:ArtistService ) { }

  ngOnInit() {
    this.loadArtist();
  }

  loadArtist() {
    this.artistService.listarArtistasPrincipales().subscribe({
      next: (data) => {
        console.log('✅ Datos recibidos:', data);
        this.listaSlidesArtista = data.items;
        //this.profile = data;
      },
      error: (err) => {
        console.error('❌ Error al cargar perfil:', err);
        //this.errorMessage = 'No se pudo cargar el perfil. Inténtalo de nuevo.';
      },
      complete: () => {
        console.log('🎯 Petición finalizada');
      }
    });
  }

  verDetalleArtista(artista: any) {
    console.log('🎤 Datos del artista seleccionado:', artista);
  }


}

import { Component, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-artista',
  templateUrl: './slider-artista.component.html',
  styleUrls: ['./slider-artista.component.scss'],
  imports: [IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderArtistaComponent  implements OnInit {

   listaSlidesArtista = [
    {
      titulo: 'Popular Now',
      imagen: '../../../assets/img/36.jpg',
      descripcion: {
        album: 'Blinding Lights',
        artista: 'The Weeknd',
        year: '2020'
      }
    },
    {
      titulo: 'Top Hit',
      imagen: '../../../assets/img/37.jpg',
      descripcion: {
        album: 'Levitating',
        artista: 'Dua Lipa',
        year: '2021'
      }
    },
    {
      titulo: 'Fresh Release',
      imagen: '../../../assets/img/35.jpg',
      descripcion: {
        album: 'As It Was',
        artista: 'Harry Styles',
        year: '2022'
      }
    },
    {
      titulo: 'Classic Vibes',
      imagen: '../../../assets/img/36.jpg',
      descripcion: {
        album: 'Bohemian Rhapsody',
        artista: 'Queen',
        year: '1975'
      }
    },
    {
      titulo: 'New Discovery',
      imagen: '../../../assets/img/37.jpg',
      descripcion: {
        album: 'Heat Waves',
        artista: 'Glass Animals',
        year: '2021'
      }
    }
  ];

  constructor() { }

  ngOnInit() {}

}

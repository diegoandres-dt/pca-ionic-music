import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-mi-slider',
  templateUrl: './mi-slider.component.html',
  styleUrls: ['./mi-slider.component.scss'],
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MiSliderComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true
  };

   listaSlides = [
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

  ngOnInit() { }

  getColor(index: number): string {
  const colores = ['#67343e', '#b3a20d', '#7283e6', '#4f5e83', '#8fca9aff'];
  return colores[index % colores.length];
}

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-mi-slider',
  templateUrl: './mi-slider.component.html',
  styleUrls: ['./mi-slider.component.scss'],
  imports: [CommonModule,IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MiSliderComponent  implements OnInit {

   slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true
  };

  sliderItems = [
    {
      titulo: 'Bienvenido a Vibra',
      imagen: 'assets/img/vibra1.png',
      texto1: 'Escucha música sin límites',
      texto2: 'Explora nuevos géneros',
      texto3: 'Disfruta en cualquier momento'
    },
    {
      titulo: 'Tus artistas favoritos',
      imagen: 'assets/img/vibra2.png',
      texto1: 'Playlist personalizadas',
      texto2: 'Recomendaciones diarias',
      texto3: 'Sin interrupciones'
    },
    {
      titulo: 'Modo nocturno activado',
      imagen: 'assets/img/vibra3.png',
      texto1: 'Diseño moderno y oscuro',
      texto2: 'Ideal para escuchar de noche',
      texto3: 'Visualiza ondas y ritmos'
    }
  ];

  constructor() { }

  ngOnInit() {}

}

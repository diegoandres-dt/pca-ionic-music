import { Component, Input, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-artista',
  templateUrl: './slider-artista.component.html',
  styleUrls: ['./slider-artista.component.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderArtistaComponent implements OnInit {


  @Input() listaSlidesArtista: any[] = [

  ];

  constructor() { }

  ngOnInit() { }
  reemplazarImagenPorDefecto(event: Event) {
    const elemento = event.target as HTMLImageElement;
    elemento.src = '../../../assets/img/placeholder.png'; // Ajusta la ruta si es necesario
  }

}

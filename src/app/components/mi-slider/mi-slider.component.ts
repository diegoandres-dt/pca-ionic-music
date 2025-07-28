import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() listaSlides: any[] = [];
  @Output() datosAlPadreSlider = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  getColor(index: number): string {
    const colores = ['#67343e', '#b3a20d', '#7283e6', '#4f5e83', '#8fca9aff'];
    return colores[index % colores.length];
  }

  enviarDatosSlider(item: any) {
    console.log("item", item);
    this.datosAlPadreSlider.emit(item);
  }

}
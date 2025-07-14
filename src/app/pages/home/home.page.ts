import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { library, playCircle,search } from 'ionicons/icons';
import { MiSliderComponent } from 'src/app/components/mi-slider/mi-slider.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule,CommonModule,MiSliderComponent],
})
export class HomePage {
  constructor() {
     addIcons({ library, playCircle,search });
  }
}

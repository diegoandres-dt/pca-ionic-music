import { Component } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  constructor() {
     addIcons({ library, playCircle, radio, search });
  }
}

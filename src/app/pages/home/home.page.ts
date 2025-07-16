import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { library, playCircle, search } from 'ionicons/icons';
import { MiSliderComponent } from 'src/app/components/mi-slider/mi-slider.component';
import { Router } from '@angular/router';
import { ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, MiSliderComponent],
})
export class HomePage {
  tipoModo = 'Cambiar a modo Oscuro';
  isDarkMode = false;

  constructor(private router: Router) {
    addIcons({ library, playCircle, search,ellipsisVertical });
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.tipoModo = this.isDarkMode ? 'Cambiar a modo Lithg' : 'Cambiar a modo Oscuro';

    document.body.classList.toggle('dark', this.isDarkMode);
  }

  sendIntro() {
    this.router.navigate(['/'])
  }

}

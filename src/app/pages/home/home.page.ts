import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { library, playCircle, search } from 'ionicons/icons';
import { MiSliderComponent } from 'src/app/components/mi-slider/mi-slider.component';
import { Router } from '@angular/router';
import { ellipsisVertical } from 'ionicons/icons';
import { SliderArtistaComponent } from 'src/app/components/slider-artista/slider-artista.component';
import { ArtistService } from 'src/app/services/artist.service';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, MiSliderComponent,SliderArtistaComponent],
})
export class HomePage {
  tipoModo = 'Cambiar a modo Oscuro';
  isDarkMode = false;
  objetoArtista:any[]=[];
  objetoAlbum:any[]=[];

  constructor(private router: Router, private artistService:ArtistService, private albumService:AlbumService) {
    addIcons({ library, playCircle, search, ellipsisVertical });
  }

   ngOnInit() {
    this.artistService.listarArtista().subscribe((data) => {
      console.log(data);
      this.objetoArtista=data;
    });

    this.albumService.listarAlbum().subscribe((data) => {
      console.log(data);
      this.objetoAlbum=data;
    });

   }


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.tipoModo = this.isDarkMode ? 'Cambiar a modo Lithg' : 'Cambiar a modo Oscuro';

    document.body.classList.toggle('dark', this.isDarkMode);
  }

  sendIntro() {
    this.router.navigate(['/'])
  }

  sendDetail() {
    this.router.navigate(['tabs/album-detail'])
  }

}

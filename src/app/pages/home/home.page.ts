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
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/components/modal-info/modal-info.component';
import { exitOutline, invertModeOutline, albumsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, MiSliderComponent, SliderArtistaComponent, ModalInfoComponent],
})
export class HomePage {
  tipoModo = 'Cambiar a modo Oscuro';
  isDarkMode = false;
  objetoArtista: any[] = [];
  objetoAlbum: any[] = [];
  isModalOpen: boolean = false;
  verArtista:any;
  constructor(private router: Router, private artistService: ArtistService, private albumService: AlbumService, private modalCtrl: ModalController) {
   addIcons({ library, playCircle, search, ellipsisVertical, exitOutline, invertModeOutline, albumsOutline });
  }


  ngOnInit() {
    this.artistService.listarArtista().subscribe((data) => {
      console.log(data);
      this.objetoArtista = data;
    });

    this.albumService.listarAlbum().subscribe((data) => {
      console.log(data);
      this.objetoAlbum = data;
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


  async abrirModal() {
    this.isModalOpen = true;
    const modal = await this.modalCtrl.create({
      component: ModalInfoComponent,
      componentProps: {
        titulo: 'Información del Artista'
      },
      showBackdrop: true
    });

    await modal.present();
  }

  cerrarModal(event: any) {
    console.log("hola", event)
    this.isModalOpen = event;
  }
  detalleArtista(event: any) {
    console.log(event)
      this.artistService.verArtista(event.id).subscribe((data) => {
      console.log(data);
      this.verArtista = data;
      this.abrirModal();
    });
  }

}

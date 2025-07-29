import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { library, playCircle, search, heart } from 'ionicons/icons';
import { MiSliderComponent } from 'src/app/components/mi-slider/mi-slider.component';
import { Router } from '@angular/router';
import { ellipsisVertical } from 'ionicons/icons';
import { SliderArtistaComponent } from 'src/app/components/slider-artista/slider-artista.component';
import { ArtistService } from 'src/app/services/artist.service';
import { AlbumService } from 'src/app/services/album.service';
import { exitOutline, invertModeOutline, albumsOutline, star, play, shuffle, cloudDownloadOutline, heartOutline } from 'ionicons/icons';
import { IonAlert, IonModal, IonIcon, IonItem, IonList, IonLabel, IonMenuButton, IonButton, IonMenu, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent } from '@ionic/angular/standalone';

import { OverlayEventDetail } from '@ionic/core/components';
import { TracksServiceService } from 'src/app/services/tracks-service.service';
import { ReproductorFooterComponent } from 'src/app/components/reproductor-footer/reproductor-footer.component';
import { FovoritosService } from 'src/app/services/fovoritos.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonAlert, CommonModule, IonButton, IonMenuButton, IonList, IonIcon, IonLabel, IonItem, IonContent, IonMenu, IonToolbar, IonHeader, IonButtons, IonTitle, MiSliderComponent, SliderArtistaComponent, IonModal, ReproductorFooterComponent],
})
export class HomePage {
  tipoModo = 'Cambiar a modo Oscuro';
  isDarkMode = false;
  objetoArtista: any[] = [];
  objetoAlbum: any[] = [];
  objetoDisco: any[] = [];
  isModalOpen: boolean = false;
  verArtista: any;
  @ViewChild(IonModal) modal!: IonModal;

  @ViewChild(ReproductorFooterComponent) reproductor!: ReproductorFooterComponent;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
      },
    },
    {
      text: 'Cerrar Sesión',
      role: 'confirm',
      handler: () => {
        localStorage.setItem('login', 'false');
        this.router.navigateByUrl('/login', { replaceUrl: true });
      },
    },
  ];

  reproductorActive: { name: string; image: string; popularity: string; followers: string } = {
    name: '',
    image: '',
    popularity: '',
    followers: ''
  };

  constructor(private router: Router, private artistService: ArtistService, private albumService: AlbumService, private tracksService: TracksServiceService, private fovoritosService: FovoritosService) {
    addIcons({ library, playCircle, search, ellipsisVertical, exitOutline, invertModeOutline, albumsOutline, star, play, shuffle, cloudDownloadOutline, heartOutline, heart });
  }



  ngOnInit() {
    this.artistService.listarArtista().subscribe((data) => {
      this.objetoArtista = data;
    });

    this.albumService.listarAlbum().subscribe((data) => {
      this.objetoAlbum = data;
    });

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.tipoModo = this.isDarkMode ? 'Cambiar a modo Lithg' : 'Cambiar a modo Oscuro';

    document.body.classList.toggle('dark', this.isDarkMode);
  }

  sendIntro() {
    this.router.navigate(['/'])
  }

  sendDetail(e: any) {
    this.router.navigate(['tabs/album-detail'])
  }

  cerrarModal(event: any) {
    this.isModalOpen = event;
  }

  detalleArtista(event: any) {
    this.artistService.verArtista(event.id).subscribe((data) => {
      this.verArtista = data;
      const openModalBtn = document.getElementById('open-modal');
      if (openModalBtn) {
        openModalBtn.click();
      }
      this.tracksService.verMusica(this.verArtista.id).subscribe((data) => {
        this.objetoDisco = data;
      });

    });
  }

  reproducirDisco(item: any) {
    this.reproductorActive = item;
    this.modal.dismiss(this.name, 'confirm');
    this.reproductor.togglePlayPause();

  }

  cerrarSecion() {
    localStorage.setItem('login', 'false');
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  setResult(event: CustomEvent<OverlayEventDetail>) {

  }

  toggleFavorito(id: number) {
    const nuevosIds = this.fovoritosService.toggleId(id);
  }
  existeFavorito(id:number):boolean {
    if (this.fovoritosService.idExiste(id)) {
      return true;
    } else {
      return false;
    }
  }

}
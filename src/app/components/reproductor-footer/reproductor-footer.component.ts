import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pause, play } from 'ionicons/icons';


@Component({
  selector: 'app-reproductor-footer',
  templateUrl: './reproductor-footer.component.html',
  styleUrls: ['./reproductor-footer.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class ReproductorFooterComponent implements OnInit {


  @Input() cancion: string | undefined;
  @Input() artista: string = 'Nombre del artista';
  @Input() imagen: string = '';
  @Input() audioUrl: string = '';

  isPlaying = false;
  audio: HTMLAudioElement | null = null;
  progreso = 0;


  constructor() {
    addIcons({ play, pause });
  }

  ngOnInit() {
    if (this.audioUrl) {
      this.inicializarAudio(this.audioUrl);
    }
  }

  inicializarAudio(url: string) {
    this.audio = new Audio(url);
    this.audio.addEventListener('timeupdate', this.actualizarProgreso);
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.progreso = 0;
    });
  }

  togglePlayPause() {
    if (!this.audio) return;

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.isPlaying = !this.isPlaying;
    console.log("this.isPlaying", this.isPlaying);
  }


  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.removeEventListener('timeupdate', this.actualizarProgreso);
      this.audio = null;
    }
  }

  actualizarProgreso = () => {
    if (this.audio && this.audio.duration) {
      this.progreso = (this.audio.currentTime / this.audio.duration) * 100;
    }
  };
}

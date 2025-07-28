import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star, play, shuffle, cloudDownloadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-modal-info',
  imports: [CommonModule, IonicModule],
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnChanges {
  @Input() infoArtista: { name: string; image: string; popularity: string; followers: string } = {
    name: '',
    image: '',
    popularity: '',
    followers: ''
  };

  @Output() isModalOpenEmitter = new EventEmitter<boolean>();

  constructor(private modalCtrl: ModalController) {
    addIcons({ heart, logoApple, settingsSharp, star, play, shuffle, cloudDownloadOutline });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['infoArtista'] && changes['infoArtista'].currentValue) {
      this.infoArtista = changes['infoArtista'].currentValue;
      console.log("coma mierda", this.infoArtista)
    }
  }

  cerrar() {
    console.log("cerrar")
    this.isModalOpenEmitter.emit(false);
    this.modalCtrl.dismiss();
  }

}

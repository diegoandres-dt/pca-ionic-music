import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { flashOutline, statsChartOutline, heartOutline, downloadOutline} from 'ionicons/icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ProfilePage implements OnInit {
  nombre = 'Arya Muller';
  imagen = '../../../assets/img/foto_profile.png';
  selectedSegment: 'estado' | 'actividad' = 'estado';

  estadoStats = [
    { label: 'Seguidores', value: 10, icon: 'flash-outline', color: '#ff6b6b' },
    { label: 'Seguidos', value: 2, icon: 'stats-chart-outline', color: '#4dabf7' },
    { label: 'Favoritos', value: 10, icon: 'heart-outline', color: '#51cf66' },
    { label: 'Descargas', value: 9, icon: 'download-outline', color: '#ffa94d' },
  ];

  actividadStats = [
    { label: 'Descargas', value: 9, icon: 'download-outline', color: '#ffa94d' },
    { label: 'Favoritos', value: 10, icon: 'heart-outline', color: '#51cf66' },
    { label: 'Seguidos', value: 2, icon: 'stats-chart-outline', color: '#4dabf7' },
    { label: 'Seguidores', value: 10, icon: 'flash-outline', color: '#ff6b6b' },
  ];
  

  constructor() {
    addIcons({flashOutline, statsChartOutline, heartOutline, downloadOutline});
  }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  
}

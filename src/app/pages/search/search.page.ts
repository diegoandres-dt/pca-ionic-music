import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { personCircle, cameraOutline} from 'ionicons/icons';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonIcon, IonSearchbar, IonAvatar, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MiSearchComponent } from "src/app/components/mi-search/mi-search.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonAvatar, IonSearchbar, IonIcon, IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, MiSearchComponent]
})
export class SearchPage implements OnInit {

  constructor() { 
     addIcons({personCircle, cameraOutline });
  }

  ngOnInit() {
  }

}

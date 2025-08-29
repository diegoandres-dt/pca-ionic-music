import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { personCircle} from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { MiSearchComponent } from "src/app/components/mi-search/mi-search.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MiSearchComponent]
})
export class SearchPage implements OnInit {

  constructor() { 
     addIcons({personCircle });
  }

  ngOnInit() {
  }

}

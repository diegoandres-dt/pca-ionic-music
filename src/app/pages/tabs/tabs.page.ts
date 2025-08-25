import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, searchOutline, playOutline, fileTrayFullOutline } from 'ionicons/icons';
import { PlayerComponent } from "src/app/components/player/player.component";



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, CommonModule, FormsModule, PlayerComponent]
})
export class TabsPage implements OnInit {

  constructor() {

     addIcons({ library, playCircle, radio, searchOutline, playOutline, fileTrayFullOutline });
   }

  ngOnInit() {
  }

}

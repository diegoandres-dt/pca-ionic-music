import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabBar, IonTabButton,IonTabs, CommonModule, FormsModule,RouterOutlet]
})
export class TabsPage implements OnInit {

  constructor() {

     addIcons({ library, playCircle, radio, search });
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star, play, shuffle} from 'ionicons/icons';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class AlbumDetailPage implements OnInit {

  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star, play, shuffle});
   }

  ngOnInit() {
  }

}

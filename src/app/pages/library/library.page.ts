import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { musicalNotes, create, albums, musicalNote} from 'ionicons/icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LibraryPage implements OnInit {

  constructor() {
    addIcons({musicalNotes, create, albums, musicalNote  });
   }

  ngOnInit() {
  }

}

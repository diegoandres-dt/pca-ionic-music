import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-mi-search',
  templateUrl: './mi-search.component.html',
  styleUrls: ['./mi-search.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MiSearchComponent  implements OnInit {

   items = [
    {
      image: '../../../assets/img/35.jpg',
      title: 'Música para ti'
    },
    {
      image: '../../../assets/img/35.jpg',
      title: '#jilted'
    },
    {
      image: '../../../assets/img/35.jpg',
      title: '#mushy'
    }
  ];

  categories = [
    { title: 'Música', color: '#e91e63', image: '../../../assets/img/35.jpg' },
    { title: 'Podcasts', color: '#00695c', image: '../../../assets/img/36.jpg' },
    { title: 'Eventos en\nvivo', color: '#8e24aa', image: '../../../assets/img/37.jpg' },
    { title: 'Creado para\nti', color: '#7e57c2', image: '../../../assets/img/35.jpg' },
    { title: 'Próximos lanzamien...', color: '#388e3c', image: '../../../assets/img/36.jpg' },
    { title: 'Nuevos lanzamien...', color: '#9e9d24', image: '../../../assets/img/37.jpg' },
    { title: 'Latina', color: '#1976d2', image: '../../../assets/img/35.jpg' },
    { title: 'Pop', color: '#546e7a', image: '../../../assets/img/36.jpg' },
    { title: 'Hip hop', color: '#263238', image: '../../../assets/img/37.jpg' },
    { title: 'Música\nMexicana', color: '#424242', image: '../../../assets/img/35.jpg' }
  ];

  constructor() { }

  ngOnInit() {}

}

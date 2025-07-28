import { Component, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { checkmarkCircleOutline, closeCircleOutline, alertCircleOutline, informationCircleOutline } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class SnackBarComponent implements OnInit {

  @Input() icon: string = 'information-circle';
  @Input() title: string = 'Título';
  @Input() message: string = 'Mensaje';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';

  constructor() {
    addIcons({ checkmarkCircleOutline, closeCircleOutline, alertCircleOutline, informationCircleOutline });

  }

  ngOnInit(): void { }

}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, GestureController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { play, pause, playBack, playForward, volumeHigh, volumeOff, ellipsisVertical, musicalNote, radio, albums } from 'ionicons/icons';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PlayerComponent implements OnInit {
  @ViewChild('playerContainer', { read: ElementRef }) playerContainer!: ElementRef;

  isPlaying = false;
  isExpanded = false;
  currentTime = 0;
  duration = 0;
  volume = 50;

  private audio!: HTMLAudioElement;
  private updateInterval: any;

  constructor(private gestureCtrl: GestureController) {}

  ngOnInit(): void {
    addIcons({ play, pause, playBack, playForward, volumeHigh, volumeOff, ellipsisVertical, musicalNote, radio, albums });

    this.audio = new Audio('assets/audio/evergrey.mp3');
    this.audio.volume = this.volume / 100;

    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
    });

    this.updateInterval = setInterval(() => {
      if (this.audio && this.isPlaying) {
        this.currentTime = this.audio.currentTime;
      }
    }, 500);
  }

  ngAfterViewInit() {
    this.initSwipeGesture();
  }

  ngOnDestroy(): void {
    if (this.updateInterval) clearInterval(this.updateInterval);
    if (this.audio) this.audio.pause();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  updateProgress(ev: any) {
    const newTime = ev.detail.value;
    this.audio.currentTime = newTime;
    this.currentTime = newTime;
  }

  updateVolume(ev: any) {
    this.volume = ev.detail.value;
    this.audio.volume = this.volume / 100;
  }

  formatTime(sec: number): string {
    const min = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${min}:${s < 10 ? '0' + s : s}`;
  }

  private initSwipeGesture() {
    const gesture = this.gestureCtrl.create({
      el: this.playerContainer.nativeElement,
      threshold: 15,
      gestureName: 'swipe-down',
      onMove: ev => {
        if (this.isExpanded && ev.deltaY > 100) {
          this.isExpanded = false;
        }
      }
    });
    gesture.enable(true);
  }
}

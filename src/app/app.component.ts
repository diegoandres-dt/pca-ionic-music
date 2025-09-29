import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    const hasSeenIntro = localStorage.getItem('intro');
    console.log("hasSeenIntro", hasSeenIntro);

    if (hasSeenIntro === 'true') {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.router.navigateByUrl('', { replaceUrl: true });
    }

  }


}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntroPage implements OnInit {

  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;

  datosIntro = [
    {
      imagen_fondo: '../../../assets/img/fondoimg2.png',
      nombre_boton: 'Botón 1',
      titulo: 'Bienvenido a <br> Vibra',
      descripcion: 'Descubre, conecta y disfruta de una experiencia única pensada para ti. ¡Gracias por ser parte de nuestra comunidad!',
      imagen:''
    },
    {
      imagen_fondo: '',
      nombre_boton: 'Botón 2',
      titulo: 'Descubre tu música ideal',
      descripcion: 'Conéctate con el ritmo de tus días. Explora una experiencia musical diseñada para acompañarte en cada momento, con listas personalizadas y sonidos que inspiran alegría y energía.',
      imagen:'"../../../assets/img/inmagenintro1.png'
    },
    {
      imagen_fondo: 'ruta_a_la_imagen_3',
      nombre_boton: 'Botón 3',
      titulo: 'Deja que la música te mueva',
      descripcion: 'Siente el ritmo, sube el volumen y baila como si nadie te mirara. Nuestra app te ofrece los mejores beats para liberar tu energía y disfrutar cada instante con buena vibra.',
      imagen:'"../../../assets/img/imagenintro2.png'
    },
    {
      imagen_fondo: 'ruta_a_la_imagen_4',
      nombre_boton: 'Botón 4',
      titulo: 'Momentos que suenan mejor juntos',
      descripcion: 'Comparte con quienes más quieres la música que une generaciones. Desde los clásicos de siempre hasta las últimas novedades, crea recuerdos inolvidables al ritmo de tus canciones favoritas.',
      imagen:'"../../../assets/img/imagenintro3.png'
    }
  ];

  constructor(private router: Router){}

  ngOnInit() {
  }

  sendHome(){
    this.router.navigate(['/home'])
  }

  siguiente() {
    const swiperEl = this.swiperRef.nativeElement;
    swiperEl.swiper.slideNext();
  }



}

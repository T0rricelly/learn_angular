import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploIf } from "./lessons/if/ejemplo-if/ejemplo-if";
import { EjemploDataBinding } from './lessons/data-binding/ejemplo-data-binding/ejemplo-data-binding';
import { EjemploFor } from "./lessons/for/ejemplo-for/ejemplo-for";
import { EjemploForObjetos } from './lessons/for/ejemplo-for-objetos/ejemplo-for-objetos';
import { EjemploFather } from './lessons/input/ejemplo-father/ejemplo-father';
import { EjemploFatherSignal } from './lessons/input-signal/ejemplo-father-signal/ejemplo-father-signal';
import { EjemploChildOutput } from './lessons/output/ejemplo-child-output/ejemplo-child-output';
import { EjemploFatherOutput } from './lessons/output/ejemplo-father-output/ejemplo-father-output';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [ EjemploIf, EjemploDataBinding, EjemploFor, EjemploForObjetos, EjemploFather, EjemploFatherSignal, EjemploFatherOutput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Curso angular';
}
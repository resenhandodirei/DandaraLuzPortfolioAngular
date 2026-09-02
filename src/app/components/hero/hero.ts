import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importação necessária

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [], 
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {}
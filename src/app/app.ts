import { Component, effect, signal } from '@angular/core';
import { Header } from './components/header/header'; // Verifique o caminho
import { Hero } from './components/hero/hero'; // Verifique o caminho
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Projects, Services, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Design && Portfolio');
    protected readonly darkMode = signal(false);

   constructor() {
    effect(() => {
      document.documentElement.setAttribute(
        'data-theme',      
        this.darkMode() ? 'dark' : 'light'
      );
    });
  }

  toggleTheme() {
    console.log('cliquei no tema!');
    this.darkMode.update(v => !v);
  }
}
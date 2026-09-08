import { Component } from '@angular/core';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      id: 'p1',
      title: 'Retrato Autoral', // substitua pelo título real
      category: 'Photography',
      imageUrl: 'https://...', // substitua pela URL real que já está no HTML hoje
      imageAlt: 'Retrato em preto e branco de mulher olhando para a câmera'
    },
    {
      id: 'p2',
      title: 'Identidade Visual XYZ',
      category: 'Digital Art',
      imageUrl: 'https://...',
      imageAlt: 'Peça de design gráfico com paleta tropical'
    },
    // continue com os outros projetos que já existem no HTML
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface TechWithColors {
  name: string;
  colors: {
    from: string;
    to: string;
  };
}

/**
 * Componente Skills - Habilidades y tecnologías
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly principalStack: TechWithColors[] = [
    {
      name: 'Angular',
      colors: { from: '#DD0031', to: '#C3002F' }, // Rojo Angular
    },
    {
      name: 'TypeScript',
      colors: { from: '#3178C6', to: '#235A97' }, // Azul TypeScript
    },
    {
      name: 'Node.js',
      colors: { from: '#339933', to: '#267326' }, // Verde Node.js
    },
    {
      name: 'PostgreSQL',
      colors: { from: '#336791', to: '#2E5A7A' }, // Azul PostgreSQL
    },
    {
      name: 'Ionic',
      colors: { from: '#3880FF', to: '#2E6BE6' }, // Azul Ionic
    },
  ];

  readonly complementarioStack: TechWithColors[] = [
    {
      name: 'Redis',
      colors: { from: '#DC382D', to: '#B82E24' }, // Rojo Redis
    },
    {
      name: 'Socket.IO',
      colors: { from: '#010101', to: '#1A1A1A' }, // Negro Socket.IO
    },
    {
      name: 'Bull',
      colors: { from: '#FF6B6B', to: '#E55555' }, // Rojo/Naranja Bull
    },
    {
      name: 'Git',
      colors: { from: '#F05032', to: '#D43A1F' }, // Naranja Git
    },
    {
      name: 'RxJS',
      colors: { from: '#B7178C', to: '#9A1270' }, // Rosa RxJS
    },
  ];

  readonly experienciaAdicional: TechWithColors[] = [
    {
      name: 'Vue.js',
      colors: { from: '#4FC08D', to: '#3FA374' }, // Verde Vue.js
    },
    {
      name: 'React.js',
      colors: { from: '#61DAFB', to: '#4BC5D9' }, // Cyan React
    },
    {
      name: 'React Native',
      colors: { from: '#61DAFB', to: '#4BC5D9' }, // Cyan React Native
    },
  ];
}

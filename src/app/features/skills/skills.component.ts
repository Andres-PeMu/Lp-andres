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
      colors: { from: '#DD0031', to: '#C3002F' },
    },
    {
      name: 'React',
      colors: { from: '#61DAFB', to: '#4BC5D9' },
    },
    {
      name: 'Vue.js',
      colors: { from: '#4FC08D', to: '#3FA374' },
    },
    {
      name: 'TypeScript',
      colors: { from: '#3178C6', to: '#235A97' },
    },
    {
      name: 'Node.js',
      colors: { from: '#339933', to: '#267326' },
    },
    {
      name: 'PostgreSQL',
      colors: { from: '#336791', to: '#2E5A7A' },
    },
    {
      name: 'Ionic',
      colors: { from: '#3880FF', to: '#2E6BE6' },
    },
    {
      name: 'React Native',
      colors: { from: '#61DAFB', to: '#4BC5D9' },
    },
  ];

  readonly complementarioStack: TechWithColors[] = [
    {
      name: 'NestJS',
      colors: { from: '#E0234E', to: '#C41E42' },
    },
    {
      name: 'Redis',
      colors: { from: '#DC382D', to: '#B82E24' },
    },
    {
      name: 'Socket.IO',
      colors: { from: '#010101', to: '#1A1A1A' },
    },
    {
      name: 'Kafka',
      colors: { from: '#231F20', to: '#3D3A3B' },
    },
    {
      name: 'Bull',
      colors: { from: '#FF6B6B', to: '#E55555' },
    },
    {
      name: 'Git',
      colors: { from: '#F05032', to: '#D43A1F' },
    },
    {
      name: 'RxJS',
      colors: { from: '#B7178C', to: '#9A1270' },
    },
  ];

  readonly experienciaAdicional: TechWithColors[] = [
    {
      name: 'MQTT',
      colors: { from: '#660066', to: '#4D004D' },
    },
    {
      name: 'Express',
      colors: { from: '#000000', to: '#333333' },
    },
    {
      name: 'Kotlin',
      colors: { from: '#7F52FF', to: '#6B42D9' },
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

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
  readonly skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'RxJS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'NestJS', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 },
        { name: 'Microservicios', level: 80 },
      ],
    },
    {
      title: 'Bases de Datos',
      icon: '💾',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'Testing', level: 85 },
      ],
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

/**
 * Componente Experience - Timeline de experiencia profesional
 */
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly experiences = [
    {
      title: 'Senior Fullstack Engineer',
      company: 'Nombre de la Empresa',
      period: '2020 - Presente',
      description:
        'Lideré el desarrollo de aplicaciones web escalables utilizando Angular, Node.js y arquitecturas modernas. Implementé mejores prácticas de desarrollo y colaboré en la toma de decisiones técnicas.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB'],
      current: true,
    },
    {
      title: 'Fullstack Developer',
      company: 'Nombre de la Empresa',
      period: '2018 - 2020',
      description:
        'Desarrollé y mantuve aplicaciones web empresariales. Colaboré con equipos multidisciplinarios para entregar soluciones de alta calidad.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      current: false,
    },
    {
      title: 'Frontend Developer',
      company: 'Nombre de la Empresa',
      period: '2017 - 2018',
      description:
        'Especializado en desarrollo frontend, creé interfaces de usuario intuitivas y responsivas utilizando tecnologías modernas.',
      technologies: ['JavaScript', 'Vue.js', 'CSS3'],
      current: false,
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

/**
 * Componente Technologies - Logos de tecnologías principales
 */
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly technologies = [
    { name: 'Angular', icon: null },
    { name: 'Vue.js', icon: null },
    { name: 'React', icon: null },
    { name: 'Tailwind', icon: null },
    { name: 'Bootstrap', icon: null },
    { name: 'PostgreSQL', icon: null },
    { name: 'Node.js', icon: null },
  ];
}

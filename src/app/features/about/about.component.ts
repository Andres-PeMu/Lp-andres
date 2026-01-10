import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

/**
 * Componente About - Sección sobre mí con presentación profesional
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}

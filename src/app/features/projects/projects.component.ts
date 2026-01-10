import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

/**
 * Componente Projects - Proyectos destacados
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description:
        'Aplicación web completa para gestión de recursos empresariales con dashboard interactivo y reportes en tiempo real.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      image: '/assets/images/project-placeholder.jpg',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Plataforma E-commerce',
      description:
        'Solución de comercio electrónico escalable con carrito de compras, procesamiento de pagos y panel de administración.',
      technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
      image: '/assets/images/project-placeholder.jpg',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Aplicación de Telemetría',
      description:
        'Sistema de monitoreo y análisis de datos en tiempo real para flotas de vehículos con mapas interactivos.',
      technologies: ['Angular', 'NestJS', 'WebSockets', 'Redis'],
      image: '/assets/images/project-placeholder.jpg',
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Dashboard Analítico',
      description:
        'Dashboard empresarial con visualizaciones interactivas y reportes personalizables para toma de decisiones.',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'D3.js'],
      image: '/assets/images/project-placeholder.jpg',
      github: '#',
      demo: '#',
      featured: false,
    },
  ];
}

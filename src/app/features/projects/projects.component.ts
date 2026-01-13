import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  appStore?: string;
  featured: boolean;
}

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
  readonly projects: Project[] = [
    {
      title: 'VOA - Sistema de Telemetría en Tiempo Real',
      description:
        'Plataforma de monitoreo vehicular en tiempo real con arquitectura de microservicios. Sistema crítico para recepción y procesamiento de tramas de múltiples vehículos simultáneamente.',
      details: [
        'Arquitectura de microservicios con Kafka, Node.js, NestJS y Angular.',
        'Sistema de colas personalizado para garantizar cero pérdida de alarmas.',
        'Implementación de cache distribuido para optimizar rendimiento y evitar saturación de base de datos.',
        'Desarrollo de módulos nuevos para manejo eficiente de grandes volúmenes de datos en tiempo real.',
        'Contribuciones significativas tanto en backend (NestJS, Node.js) como frontend (Angular).',
      ],
      technologies: [
        'Angular',
        'NestJS',
        'Node.js',
        'Kafka',
        'Redis',
        'TypeScript',
        'Microservicios',
      ],
      image: '/assets/images/project-placeholder.jpg',
      github: 'https://github.com/Andres-PeMu',
      demo: 'https://voademo.metgroupsas.com/auth/login',
      featured: true,
    },
    {
      title: 'EyeClinic - Sistema de Gestión Clínica',
      description:
        'Sistema integral de gestión clínica con aplicación móvil para pacientes. Mejoras en reportes, sistema de cierre de caja con precisión decimal y aplicación móvil nativa para Android e iOS.',
      details: [
        'Mejora de reportes para mayor usabilidad y claridad para el usuario.',
        'Corrección del sistema de cierre de caja con manejo preciso de decimales para garantizar exactitud financiera.',
        'Desarrollo de aplicación móvil nativa para Android e iOS con información para pacientes y administradores.',
        'Implementación de funcionalidades para visualización de citas, procedimientos pendientes y solicitud de nuevas citas.',
      ],
      technologies: [
        'Angular',
        'Ionic',
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Mobile App',
      ],
      image: '/assets/images/project-placeholder.jpg',
      github: 'https://github.com/Andres-PeMu',
      demo: 'https://test.eyeclinic.solutions/',
      appStore: 'https://play.google.com/store/apps/details?id=io.marcel.eyeclinic&hl=es_CO',
      featured: true,
    },
  ];
}

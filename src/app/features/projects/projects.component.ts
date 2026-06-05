import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  github: string;
  demo: string;
  demoLabel?: string;
  appStore?: string;
  appleStore?: string;
  platforms?: string[];
  promoImage?: string;
  showLinksModal?: boolean;
  featured: boolean;
}

interface GitHubProject {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
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
  readonly linksModalOpen = signal(false);
  readonly linksModalProject = signal<Project | null>(null);

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
      github: 'https://github.com/Andres-PeMu',
      demo: 'https://voademo.metgroupsas.com/auth/login',
      platforms: ['Web'],
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
        'Vue.js',
        'Ionic',
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Android',
        'iOS',
      ],
      github: 'https://github.com/Andres-PeMu',
      demo: 'https://test.eyeclinic.solutions/',
      appStore: 'https://play.google.com/store/apps/details?id=io.marcel.eyeclinic&hl=es_CO',
      platforms: ['Web', 'Android', 'iOS'],
      featured: true,
    },
    {
      title: 'Krocam Broaster Samir',
      description:
        'Plataforma de pedidos a domicilio para cocina virtual de pollo broaster. Carta digital con combos, carrito visual, seguimiento de pedidos con notificaciones push y pedidos por WhatsApp — disponible en web, Android e iOS.',
      details: [
        'Carta digital interactiva con categorías, combos y precios actualizados en tiempo real.',
        'Carrito de compras y confirmación de pedidos con datos de entrega a domicilio.',
        'Notificaciones push con Firebase cuando el pedido avanza (requiere cuenta).',
        'Apps nativas Android e iOS con Capacitor + Ionic React, publicadas en tiendas.',
        'Integración de pedidos por WhatsApp y sistema de reseñas moderadas por el equipo.',
      ],
      technologies: [
        'React',
        'Ionic',
        'Capacitor',
        'Firebase',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
      ],
      github: 'https://github.com/ORBiTAL-ITS/krocam-broaster',
      demo: 'https://krocam-9a82c.web.app/',
      demoLabel: 'Ver carta',
      platforms: ['Web', 'Android', 'iOS'],
      promoImage: '/assets/images/krocam-broaster.png',
      showLinksModal: true,
      featured: true,
    },
  ];

  readonly githubProjects: GitHubProject[] = [
    {
      title: 'Parcelación Casa Real',
      description:
        'Sistema de gestión de predios y lotes con modelado relacional, APIs REST con microservicios y frontend Angular responsivo.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/Andres-PeMu/web_JM_lots',
    },
    {
      title: 'Conexión Patía - Radio Online',
      description:
        'Aplicación de radio online multiplataforma (web, móvil y desktop) con reproductor de música y programación en vivo.',
      technologies: ['Ionic', 'TypeScript', 'SCSS', 'Multiplataforma'],
      github: 'https://github.com/Andres-PeMu/radio-conexion-master',
    },
    {
      title: 'Components App',
      description:
        'App móvil nativa con React Native, navegación por stacks, animaciones con Reanimated y componentes reutilizables.',
      technologies: ['React Native', 'TypeScript', 'React Navigation', 'Reanimated'],
      github: 'https://github.com/Andres-PeMu/componentsApp',
    },
    {
      title: 'Angular APIs',
      description:
        'Proyecto de consumo de APIs REST con Angular: servicios, interceptores, manejo de estado y buenas prácticas TypeScript.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST API'],
      github: 'https://github.com/Andres-PeMu/angularApis',
    },
  ];

  openLinksModal(project: Project): void {
    this.linksModalProject.set(project);
    this.linksModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLinksModal(): void {
    this.linksModalOpen.set(false);
    this.linksModalProject.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.linksModalOpen()) {
      this.closeLinksModal();
    }
  }
}

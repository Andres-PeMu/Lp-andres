import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Footer profesional con redes sociales y links importantes
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159/',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: '#', // Actualizar con tu GitHub
      icon: 'github',
    },
    {
      name: 'Email',
      url: 'mailto:tu-email@example.com', // Actualizar con tu email
      icon: 'email',
    },
  ];

  readonly quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];
}

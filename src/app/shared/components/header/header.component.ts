import { Component, OnInit, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../core/services/animation.service';

/**
 * Componente Header/Navbar con navegación sticky
 * Implementa mejoras de UX como detección de scroll y menú móvil
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private animationService = inject(AnimationService);

  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Experiencia', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrolled = window.scrollY > 50;
    this.isScrolled.set(scrolled);
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();
    this.animationService.scrollToElement(sectionId, 80);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

import { Component, OnInit, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../core/services/animation.service';

/**
 * Componente botón de scroll to top
 * Aparece cuando el usuario hace scroll hacia abajo
 */
@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css',
})
export class ScrollToTopComponent implements OnInit {
  private animationService = inject(AnimationService);

  readonly isVisible = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrolled = window.scrollY > 300;
    this.isVisible.set(scrolled);
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  scrollToTop(): void {
    this.animationService.scrollToTop();
  }
}

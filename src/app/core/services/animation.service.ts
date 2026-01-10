import { Injectable, signal } from '@angular/core';

/**
 * Servicio para gestionar animaciones y transiciones
 */
@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  readonly isScrollingUp = signal(false);
  readonly isScrollingDown = signal(false);

  constructor() {
    this.initScrollTracking();
  }

  /**
   * Inicializa el seguimiento del scroll para detectar dirección
   */
  private initScrollTracking(): void {
    let lastScrollY = window.scrollY;

    window.addEventListener(
      'scroll',
      () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          this.isScrollingDown.set(true);
          this.isScrollingUp.set(false);
        } else if (currentScrollY < lastScrollY) {
          this.isScrollingUp.set(true);
          this.isScrollingDown.set(false);
        }

        lastScrollY = currentScrollY;
      },
      { passive: true }
    );
  }

  /**
   * Scroll suave hacia un elemento
   */
  scrollToElement(elementId: string, offset = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  /**
   * Scroll suave hacia arriba
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

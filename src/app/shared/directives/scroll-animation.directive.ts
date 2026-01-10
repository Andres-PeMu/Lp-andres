import { Directive, ElementRef, OnInit, inject } from '@angular/core';

/**
 * Directiva para animar elementos al hacer scroll
 * Aplica animaciones sutiles cuando el elemento entra en el viewport
 */
@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: desconectar después de la primera animación para mejor rendimiento
            // observer.unobserve(entry.target);
          } else {
            // Para animaciones de ida y vuelta, descomentar:
            // entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(this.el.nativeElement);
  }
}

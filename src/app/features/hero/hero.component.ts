import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { AnimationService } from '../../core/services/animation.service';
import { CvDownloadService } from '../../core/services/cv-download.service';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

/**
 * Componente Hero - Sección principal de presentación
 * Incluye todas las secciones de la landing page en un solo componente
 * para mejor performance y experiencia de usuario
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(
    private animationService: AnimationService,
    private cvDownload: CvDownloadService,
  ) {}

  scrollToSection(sectionId: string): void {
    this.animationService.scrollToElement(sectionId, 80);
  }

  downloadCV(): void {
    this.cvDownload.download();
  }
}

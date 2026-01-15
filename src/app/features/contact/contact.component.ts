import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { EmailService } from '../../core/services/email.service';
import { CVGeneratorService } from '../../core/services/cv-generator.service';
import { cvData } from '../../core/data/cv-data';

/**
 * Componente Contact - Formulario de contacto profesional
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private emailService = inject(EmailService);
  private cvGenerator = inject(CVGeneratorService);
  contactForm: FormGroup;
  
  get isSubmitting(): boolean {
    return this.emailService.isSending();
  }

  get isSuccess(): boolean {
    return this.emailService.isSuccess();
  }

  get error(): string | null {
    return this.emailService.error();
  }

  readonly contactInfo: Array<{
    icon: string;
    title: string;
    value: string;
    link?: string;
    action?: string;
  }> = [
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      value: 'Andrés Felipe Peña Muñoz',
      link: 'https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159/',
    },
    {
      icon: 'email',
      title: 'Email',
      value: 'andres.pena.m15@hotmail.com',
      link: 'mailto:andres.pena.m15@hotmail.com',
    },
    {
      icon: 'cv',
      title: 'Descargar CV',
      value: 'Curriculum Vitae',
      action: 'downloadCV',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      
      const success = await this.emailService.sendEmail({
        from_name: formValue.name,
        from_email: formValue.email,
        subject: formValue.subject,
        message: formValue.message,
      });

      if (success) {
        // Reset form después de enviar exitosamente
        this.contactForm.reset();
        // Limpiar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.emailService.reset();
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${fieldName === 'name' ? 'El nombre' : fieldName === 'email' ? 'El email' : fieldName === 'subject' ? 'El asunto' : 'El mensaje'} es requerido`;
      }
      if (control.errors['email']) {
        return 'Email inválido';
      }
      if (control.errors['minlength']) {
        return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
      }
    }
    return '';
  }

  downloadCV(): void {
    this.cvGenerator.generateCV(cvData);
  }
}

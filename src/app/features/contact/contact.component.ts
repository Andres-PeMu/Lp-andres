import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

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
  contactForm: FormGroup;
  readonly isSubmitting = false;
  readonly isSubmitted = false;

  readonly contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'contacto@ejemplo.com',
      link: 'mailto:contacto@ejemplo.com',
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      value: 'Andrés Felipe Peña Muñoz',
      link: 'https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159/',
    },
    {
      icon: 'location',
      title: 'Ubicación',
      value: 'Colombia',
      link: '#',
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

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Aquí implementarías el envío del formulario
      // Por ejemplo, con EmailJS, un servicio backend, etc.
      console.log('Form submitted:', this.contactForm.value);
      // Reset form after submission
      // this.contactForm.reset();
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
}

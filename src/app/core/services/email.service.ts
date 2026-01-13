import { Injectable, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

/**
 * Servicio para enviar emails usando EmailJS
 * Las credenciales están en environment.ts
 */
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  readonly isSending = signal(false);
  readonly isSuccess = signal(false);
  readonly error = signal<string | null>(null);

  private readonly EMAILJS_SERVICE_ID = environment.emailjs.serviceId;
  private readonly EMAILJS_TEMPLATE_ID = environment.emailjs.templateId;
  private readonly EMAILJS_PUBLIC_KEY = environment.emailjs.publicKey;

  constructor() {
    // EmailJS se inicializa automáticamente al usar emailjs.send()
    // Solo necesitas las credenciales correctas
  }

  /**
   * Envía un email usando EmailJS
   * @param templateParams - Objeto con los datos del formulario
   * @returns Promise<boolean> - true si se envió correctamente
   */
  async sendEmail(templateParams: {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
  }): Promise<boolean> {
    this.isSending.set(true);
    this.error.set(null);
    this.isSuccess.set(false);

    try {
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          ...templateParams,
          to_email: 'andres.pena.m15@hotmail.com', // Tu email de destino
        },
        {
          publicKey: this.EMAILJS_PUBLIC_KEY,
        }
      );

      if (response.status === 200) {
        this.isSuccess.set(true);
        this.isSending.set(false);
        return true;
      } else {
        throw new Error('Error al enviar el email');
      }
    } catch (error: any) {
      console.error('Error enviando email:', error);
      this.error.set(error.text || 'Error al enviar el mensaje. Por favor intenta de nuevo.');
      this.isSending.set(false);
      return false;
    }
  }

  /**
   * Resetea los estados del servicio
   */
  reset(): void {
    this.isSending.set(false);
    this.isSuccess.set(false);
    this.error.set(null);
  }
}

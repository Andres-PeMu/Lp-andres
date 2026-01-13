/**
 * Ejemplo de variables de entorno
 * Copia este archivo como environment.ts y agrega tus credenciales reales
 * 
 * ⚠️ IMPORTANTE: 
 * - NO subas environment.ts con credenciales reales a repositorios públicos
 * - Usa environment.example.ts como plantilla
 * - Para producción, usa variables de entorno de tu plataforma de deploy (Vercel, Netlify, etc.)
 */
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'TU_SERVICE_ID_AQUI',
    templateId: 'TU_TEMPLATE_ID_AQUI',
    publicKey: 'TU_PUBLIC_KEY_AQUI',
  },
};

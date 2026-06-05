/**
 * Variables de entorno para producción (placeholders — no contiene credenciales reales).
 * Vercel sobrescribe este archivo en el build con las variables EMAILJS_*.
 */
export const environment = {
  production: true,
  emailjs: {
    serviceId: 'TU_SERVICE_ID_AQUI',
    templateId: 'TU_TEMPLATE_ID_AQUI',
    publicKey: 'TU_PUBLIC_KEY_AQUI',
  },
};

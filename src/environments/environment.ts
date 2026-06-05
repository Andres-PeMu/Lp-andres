/**
 * Variables de entorno para desarrollo (placeholders — no contiene credenciales reales).
 * En local: usa environment.local.ts generado desde .env.local
 * En Vercel: usa environment.prod.ts generado en el build
 */
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'TU_SERVICE_ID_AQUI',
    templateId: 'TU_TEMPLATE_ID_AQUI',
    publicKey: 'TU_PUBLIC_KEY_AQUI',
  },
};

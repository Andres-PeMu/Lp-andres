#!/usr/bin/env node

/**
 * Genera environment.ts y environment.prod.ts antes del build.
 * En CI/CD (Vercel, Netlify) usa variables de entorno.
 * En local, conserva los archivos existentes si no hay variables configuradas.
 */

const fs = require('fs');
const path = require('path');

const ENV_DIR = path.join(__dirname, '../src/environments');
const ENV_TS = path.join(ENV_DIR, 'environment.ts');
const ENV_PROD_TS = path.join(ENV_DIR, 'environment.prod.ts');

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;

const hasEnvVars = serviceId && templateId && publicKey;

function buildFileContent(production) {
  return `/**
 * Generado automáticamente por scripts/generate-environment.js
 * No editar manualmente en CI/CD.
 */
export const environment = {
  production: ${production},
  emailjs: {
    serviceId: '${serviceId}',
    templateId: '${templateId}',
    publicKey: '${publicKey}',
  },
};
`;
}

function writeEnvironments() {
  fs.mkdirSync(ENV_DIR, { recursive: true });
  fs.writeFileSync(ENV_TS, buildFileContent(false));
  fs.writeFileSync(ENV_PROD_TS, buildFileContent(true));
  console.log('✓ Archivos de entorno generados desde variables de entorno');
}

if (hasEnvVars) {
  writeEnvironments();
} else if (fs.existsSync(ENV_TS) && fs.existsSync(ENV_PROD_TS)) {
  console.log('✓ Usando archivos de entorno locales existentes');
} else {
  console.warn(
    '⚠ No se encontraron variables EMAILJS_* ni archivos locales. ' +
      'Copiando plantilla de ejemplo (el formulario de contacto no funcionará hasta configurar credenciales).'
  );
  fs.mkdirSync(ENV_DIR, { recursive: true });
  fs.copyFileSync(path.join(ENV_DIR, 'environment.example.ts'), ENV_TS);
  fs.copyFileSync(path.join(ENV_DIR, 'environment.example.ts'), ENV_PROD_TS);
}

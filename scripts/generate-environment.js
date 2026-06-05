#!/usr/bin/env node

/**
 * Genera archivos de entorno sin modificar los placeholders del repo.
 * - Vercel/CI: escribe environment.prod.ts desde EMAILJS_*
 * - Local: escribe environment.local.ts desde .env.local
 */

const fs = require('fs');
const path = require('path');

const ENV_DIR = path.join(__dirname, '../src/environments');
const ENV_TS = path.join(ENV_DIR, 'environment.ts');
const ENV_PROD_TS = path.join(ENV_DIR, 'environment.prod.ts');
const ENV_LOCAL_TS = path.join(ENV_DIR, 'environment.local.ts');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(path.join(__dirname, '../.env.local'));
loadEnvFile(path.join(__dirname, '../.env'));

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;
const hasEnvVars = Boolean(serviceId && templateId && publicKey);
const isCI = Boolean(process.env.VERCEL || process.env.CI || process.env.NETLIFY);

function buildFileContent(production) {
  return `/**
 * Generado automáticamente por scripts/generate-environment.js
 * No editar manualmente.
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

function writeProductionEnvironment() {
  fs.mkdirSync(ENV_DIR, { recursive: true });
  fs.writeFileSync(ENV_PROD_TS, buildFileContent(true));
  console.log('✓ environment.prod.ts generado desde variables de entorno (Vercel)');
}

function writeLocalEnvironment() {
  fs.mkdirSync(ENV_DIR, { recursive: true });
  fs.writeFileSync(ENV_LOCAL_TS, buildFileContent(false));
  console.log('✓ environment.local.ts generado desde .env.local');
}

function ensureLocalEnvironmentFallback() {
  fs.mkdirSync(ENV_DIR, { recursive: true });
  if (!fs.existsSync(ENV_LOCAL_TS)) {
    fs.copyFileSync(ENV_TS, ENV_LOCAL_TS);
  }
  console.log('✓ Desarrollo local con placeholders (crea .env.local para EmailJS)');
}

if (isCI) {
  if (hasEnvVars) {
    writeProductionEnvironment();
  } else {
    console.warn('⚠ Configura EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID y EMAILJS_PUBLIC_KEY en Vercel');
  }
} else if (hasEnvVars) {
  writeLocalEnvironment();
} else {
  ensureLocalEnvironmentFallback();
}

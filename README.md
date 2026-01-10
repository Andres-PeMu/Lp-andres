# 🚀 Landing Page - Andrés Felipe Peña Muñoz

Landing page personal profesional desarrollada con **Angular 21**, **Tailwind CSS** y arquitectura **feature-based**.

## 🛠️ Stack Tecnológico

- **Angular 21** - Framework principal (Standalone Components)
- **Tailwind CSS 3.4** - Framework de utilidades CSS
- **TypeScript 5.9** - Tipado estático
- **RxJS 7.8** - Programación reactiva
- **Prettier** - Formateo de código
- **ESLint** - Linter con reglas de Angular
- **Sharp** - Optimización de imágenes

## 📋 Prerequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia el servidor de desarrollo
npm run watch          # Build en modo watch

# Producción
npm run build          # Build de producción
npm run build:prod     # Build de producción optimizado

# Calidad de Código
npm run lint           # Ejecuta ESLint
npm run lint:fix       # Ejecuta ESLint y corrige automáticamente
npm run format         # Formatea el código con Prettier
npm run format:check   # Verifica el formato sin modificar

# Optimización
npm run optimize:images  # Optimiza imágenes en src/assets/images
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios singleton, interceptors
│   │   ├── services/
│   │   └── interceptors/
│   ├── shared/                   # Componentes y directivas compartidas
│   │   ├── components/
│   │   └── directives/
│   └── features/                 # Features organizados por dominio
│       ├── hero/
│       ├── about/
│       ├── experience/
│       ├── skills/
│       ├── projects/
│       └── contact/
├── assets/
│   ├── images/                   # Imágenes originales
│   │   └── optimized/            # Imágenes optimizadas (auto-generado)
│   └── styles/
│       └── variables.css         # Variables CSS globales
└── styles.css                    # Estilos globales y Tailwind
```

## 🎨 Sistema de Colores

Los colores están definidos como CSS Custom Properties en `src/styles.css` para fácil modificación:

```css
:root {
  --primary: #0ea5e9;        /* Teal/Cyan principal */
  --primary-dark: #0284c7;
  --primary-light: #38bdf8;
  --secondary: #64748b;
  --accent: #14b8a6;
  --background: #ffffff;
  --background-alt: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
}
```

Para cambiar los colores, simplemente modifica estas variables en `src/styles.css`.

## 🎭 Animaciones

El proyecto incluye animaciones sutiles de scroll:

- **Directiva `appScrollAnimation`**: Aplica animaciones fade-in al entrar en viewport
- **AnimationService**: Servicio para gestionar animaciones y scroll suave

### Uso:

```html
<div appScrollAnimation class="animate-on-scroll">
  Contenido que se animará al hacer scroll
</div>
```

## 🖼️ Optimización de Imágenes

Para optimizar imágenes antes del deploy:

1. Coloca tus imágenes en `src/assets/images/`
2. Ejecuta: `npm run optimize:images`
3. Las imágenes optimizadas se generarán en `src/assets/images/optimized/`

## 🚀 Deploy

### Vercel (Recomendado - Gratis y Rápido)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. El archivo `vercel.json` ya está configurado
3. Vercel detectará automáticamente Angular y desplegará

**Ventajas:**
- ✅ Deploy automático en cada push
- ✅ CDN global ultra-rápido
- ✅ SSL automático
- ✅ Preview deployments
- ✅ Completamente gratuito para proyectos personales

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. El archivo `netlify.toml` ya está configurado
3. Netlify detectará automáticamente el build command

**Ventajas:**
- ✅ Deploy automático
- ✅ CDN global
- ✅ SSL automático
- ✅ Formularios integrados (útil para contact form)
- ✅ Completamente gratuito

### GitHub Pages

Para GitHub Pages, necesitarás configurar un script adicional o usar Angular CLI con `angular-cli-ghpages`.

## 📝 Convenciones de Código

- **Componentes**: PascalCase (ej: `HeroComponent`)
- **Directivas**: PascalCase con sufijo `Directive` (ej: `ScrollAnimationDirective`)
- **Servicios**: PascalCase con sufijo `Service` (ej: `AnimationService`)
- **Archivos**: kebab-case para archivos de componentes (ej: `hero.component.ts`)
- **Selectores**: kebab-case con prefijo `app-` (ej: `app-hero`)

## 🔧 Configuración de Prettier

El proyecto incluye configuración de Prettier optimizada para Angular:

- Print width: 100 caracteres
- Single quotes
- Semicolons habilitados
- Tab width: 2 espacios

## 🐛 Troubleshooting

### Error de permisos con npm

Si encuentras errores de permisos con npm, puedes intentar:

```bash
# Usar nvm para manejar versiones de Node
nvm use 18

# O reinstalar npm globalmente
npm install -g npm@latest
```

### Imágenes no se optimizan

Asegúrate de tener Sharp instalado:

```bash
npm install -D sharp
```

## 📄 Licencia

Este proyecto es personal y privado.

## 👨‍💻 Autor

**Andrés Felipe Peña Muñoz**
- Senior Fullstack Engineer
- LinkedIn: [Perfil](https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159/)

---

Desarrollado con ❤️ usando Angular y Tailwind CSS

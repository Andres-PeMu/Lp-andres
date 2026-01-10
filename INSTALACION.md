# 📋 Guía de Instalación

## ⚠️ Importante - Antes de Instalar

Si encuentras errores de permisos con npm/npx (como `EPERM`), esto es un problema conocido con npm en algunos sistemas. Aquí hay soluciones:

### Opción 1: Reinstalar npm (Recomendado)

```bash
# Reinstalar npm globalmente
npm install -g npm@latest
```

### Opción 2: Usar npx con permisos específicos

Si el problema persiste, puedes instalar las dependencias manualmente:

```bash
# Instalar dependencias una por una si es necesario
npm install --save @angular/animations@^21.0.0
npm install --save-dev prettier eslint-config-prettier
# ... etc
```

### Opción 3: Verificar permisos de Node/npm

```bash
# Verificar versión de Node
node --version  # Debe ser >= 18.0.0

# Verificar versión de npm
npm --version   # Debe ser >= 9.0.0

# Si tienes problemas, reinstalar Node usando nvm
nvm install 18
nvm use 18
```

## 🚀 Pasos de Instalación

1. **Instalar todas las dependencias:**

```bash
npm install
```

Esto instalará:
- Angular 21 y todas sus dependencias
- Tailwind CSS y PostCSS
- Prettier y ESLint
- Sharp para optimización de imágenes
- Y todas las demás dependencias listadas en `package.json`

2. **Verificar la instalación:**

```bash
npm run lint        # Debe ejecutarse sin errores
npm run format:check # Verifica el formato
```

3. **Iniciar el servidor de desarrollo:**

```bash
npm start
```

La aplicación debería estar disponible en `http://localhost:4200`

## 🎨 Configurar Tailwind CSS

Tailwind CSS ya está configurado en:
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - Configuración de PostCSS
- `src/styles.css` - Importaciones de Tailwind y variables de color

## 📝 Verificar Configuración de Prettier y ESLint

Los archivos de configuración ya están creados:
- `.prettierrc` está integrado en `package.json`
- `.eslintrc.json` - Configuración de ESLint con reglas de Angular
- `.prettierignore` - Archivos a ignorar

## ✅ Verificación Final

Después de instalar, verifica que todo funcione:

```bash
# Formatear código (debe ejecutarse sin errores)
npm run format

# Ejecutar linter
npm run lint

# Build de producción
npm run build:prod
```

Si todo se ejecuta correctamente, ¡el proyecto está listo! 🎉

## 🐛 Problemas Comunes

### Error: Cannot find module '@angular/...'

**Solución:** Elimina `node_modules` y `package-lock.json`, luego reinstala:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Tailwind CSS no funciona

**Solución:** Verifica que PostCSS esté configurado correctamente. Angular 21 debería detectarlo automáticamente, pero si no:

```bash
# Verificar que tailwindcss y postcss estén instalados
npm list tailwindcss postcss autoprefixer
```

### Error: ESLint no encuentra reglas

**Solución:** Verifica que todas las dependencias de ESLint estén instaladas:

```bash
npm install --save-dev @angular-eslint/eslint-plugin @angular-eslint/template-parser @angular-eslint/eslint-plugin-template @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## 🚀 Siguiente Paso

Una vez que todo esté instalado y funcionando, puedes comenzar a desarrollar las features:

1. Hero component (ya creado como ejemplo)
2. About component
3. Experience component
4. Skills component
5. Projects component
6. Contact component

¡Buena suerte! 🎊

import { CVData } from '../models/cv-data.model';

/**
 * Datos del CV - Sincronizado con LinkedIn y CV profesional en PDF
 */
export const cvData: CVData = {
  personalInfo: {
    fullName: 'Andrés Felipe Peña Muñoz',
    title: 'Senior Full Stack Engineer',
    email: 'andres.pena.m15@hotmail.com',
    phone: '(+57) 305 925 7656',
    location: 'Popayán, Colombia',
    linkedin: 'https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159/',
    github: 'https://github.com/Andres-PeMu',
  },
  summary:
    'Ingeniero Electrónico y Senior Full Stack Engineer con más de 5 años de experiencia diseñando, estabilizando y manteniendo sistemas críticos en producción. Experiencia en plataformas de telemetría en tiempo real y aplicaciones de alta disponibilidad con MQTT, WebSockets y arquitecturas escalables. Desarrollo full stack con Angular, React, Vue.js y Node.js, y apps móviles multiplataforma con Ionic y React Native. Enfoque en código limpio, eficiencia, escalabilidad y confiabilidad.',
  experience: {
    years: '5+',
    description:
      'Desarrollo aplicaciones web, móviles y APIs escalables para entornos empresariales. Experiencia en arquitectura de microservicios, sistemas en tiempo real, optimización de rendimiento y alta concurrencia con Redis, Socket.IO y Bull.',
  },
  education: [
    {
      degree: 'Ingeniero Electrónico',
      institution: 'Corporación Universitaria Autónoma del Cauca',
      year: '2015',
    },
    {
      degree: 'Especialista en Bases de Datos',
      institution: 'SENA - Popayán, Colombia',
      year: '2017',
    },
  ],
  skills: {
    principal: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Ionic', 'React Native'],
    complementario: ['NestJS', 'Redis', 'Socket.IO', 'Bull', 'Git', 'RxJS', 'MQTT', 'Kafka'],
    adicional: ['Express', 'Sass', 'Kotlin', 'C', 'C++'],
  },
  projects: [
    {
      title: 'VOA - Sistema de Telemetría en Tiempo Real',
      description:
        'Plataforma de monitoreo vehicular en tiempo real con arquitectura de microservicios. Sistema crítico para recepción y procesamiento de tramas de múltiples vehículos simultáneamente.',
      technologies: ['Angular', 'NestJS', 'Node.js', 'Kafka', 'Redis', 'TypeScript', 'Microservicios'],
      achievements: [
        'Arquitectura de microservicios con Kafka, Node.js, NestJS y Angular.',
        'Sistema de colas personalizado para garantizar cero pérdida de alarmas.',
        'Implementación de cache distribuido para optimizar rendimiento y evitar saturación de base de datos.',
        'Desarrollo de módulos nuevos para manejo eficiente de grandes volúmenes de datos en tiempo real.',
      ],
    },
    {
      title: 'EyeClinic - Sistema de Gestión Clínica',
      description:
        'Sistema integral de gestión clínica con aplicación móvil para pacientes. Mejoras en reportes, sistema de cierre de caja con precisión decimal y aplicación móvil nativa para Android e iOS.',
      technologies: ['Vue.js', 'Ionic', 'Node.js', 'TypeScript', 'PostgreSQL', 'Mobile App'],
      achievements: [
        'Mejora de reportes para mayor usabilidad y claridad para el usuario.',
        'Corrección del sistema de cierre de caja con manejo preciso de decimales para garantizar exactitud financiera.',
        'Desarrollo de aplicación móvil nativa para Android e iOS con información para pacientes y administradores.',
        'Implementación de funcionalidades para visualización de citas, procedimientos pendientes y solicitud de nuevas citas.',
      ],
    },
    {
      title: 'Krocam Broaster Samir - Pedidos a Domicilio',
      description:
        'Plataforma de pedidos a domicilio para cocina virtual de pollo broaster. Carta digital, carrito visual, notificaciones push y apps en web, Android e iOS.',
      technologies: ['React', 'Ionic', 'Capacitor', 'Firebase', 'TypeScript', 'Vite'],
      achievements: [
        'Carta digital con combos, precios y pedidos organizados para entrega a domicilio.',
        'Apps nativas Android e iOS con Capacitor + Ionic React.',
        'Notificaciones push con Firebase para seguimiento del pedido.',
        'Integración de pedidos por WhatsApp y sistema de reseñas.',
      ],
    },
    {
      title: 'Conexión Patía - Radio Online Multiplataforma',
      description:
        'Aplicación de radio online con experiencia multiplataforma en web, móvil y desktop. Reproductor de música con programación en vivo accesible desde cualquier dispositivo.',
      technologies: ['Ionic', 'JavaScript', 'UI/UX', 'Multiplataforma'],
      achievements: [
        'Desarrollo híbrido con Ionic para web, móvil y desktop.',
        'Interfaz intuitiva con diseño moderno y navegación sencilla.',
        'Reproductor de música con acceso al programa de radio del día.',
      ],
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio' },
  ],
  certifications: [
    { name: 'Optimización y buenas prácticas en TypeScript para Node.js', issuer: 'Platzi', year: '2025' },
    { name: 'Optimización y escalabilidad de código', issuer: 'Platzi', year: '2022' },
    { name: 'Desarrollo de Apps Ionic', issuer: 'Platzi', year: '2021' },
    { name: 'Fundamentos de Angular', issuer: 'Platzi', year: '2022' },
    { name: 'Fundamentos de TypeScript', issuer: 'Platzi', year: '2021' },
  ],
};

import { CVData } from '../models/cv-data.model';

/**
 * Datos del CV - Actualizar con información completa
 * TODO: Completar los campos marcados con "?"
 */
export const cvData: CVData = {
  personalInfo: {
    fullName: 'Andrés Felipe Peña Muñoz',
    title: 'Senior Full Stack Engineer',
    email: 'andres.pena.m15@hotmail.com',
    phone: '?', // TODO: Agregar teléfono
    location: '?', // TODO: Agregar ciudad, país (ej: "Bogotá, Colombia")
    linkedin: 'https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159/',
    github: 'https://github.com/Andres-PeMu',
  },
  summary:
    'Ingeniero Electrónico y Senior Full Stack Engineer con más de 5 años de experiencia desarrollando soluciones web modernas para empresas de distintos sectores. Especializado en Angular y Node.js, con enfoque en arquitectura, rendimiento y escalabilidad. He participado en decisiones técnicas clave y en la construcción de sistemas que impactan directamente en la eficiencia operativa y la experiencia del usuario.',
  experience: {
    years: '5+',
    description:
      'Desarrollo aplicaciones web escalables, mantenibles y orientadas a negocio para entornos empresariales. Experiencia en arquitectura de microservicios, sistemas en tiempo real, optimización de rendimiento y escalabilidad.',
  },
  education: [
    {
      degree: '?', // TODO: Agregar título (ej: "Ingeniero Electrónico")
      institution: '?', // TODO: Agregar universidad
      year: '?', // TODO: Agregar año de graduación
    },
  ],
  skills: {
    principal: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Ionic'],
    complementario: ['Redis', 'Socket.IO', 'Bull', 'Git', 'RxJS'],
    adicional: ['Vue.js', 'React.js', 'React Native'],
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
      technologies: ['Angular', 'Ionic', 'Node.js', 'TypeScript', 'PostgreSQL', 'Mobile App'],
      achievements: [
        'Mejora de reportes para mayor usabilidad y claridad para el usuario.',
        'Corrección del sistema de cierre de caja con manejo preciso de decimales para garantizar exactitud financiera.',
        'Desarrollo de aplicación móvil nativa para Android e iOS con información para pacientes y administradores.',
        'Implementación de funcionalidades para visualización de citas, procedimientos pendientes y solicitud de nuevas citas.',
      ],
    },
  ],
  languages: [
    // TODO: Agregar idiomas (ej: { name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'Avanzado' })
  ],
  certifications: [
    // TODO: Agregar certificaciones si las hay (ej: { name: 'AWS Certified', issuer: 'Amazon', year: '2023' })
  ],
};

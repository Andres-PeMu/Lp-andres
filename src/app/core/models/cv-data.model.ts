/**
 * Modelo de datos para el CV
 */
export interface CVData {
  personalInfo: {
    fullName: string;
    title: string;
    email: string;
    phone?: string;
    location?: string;
    linkedin: string;
    github?: string;
  };
  summary: string;
  experience: {
    years: string;
    description: string;
  };
  education: {
    degree: string;
    institution: string;
    year?: string;
  }[];
  skills: {
    principal: string[];
    complementario: string[];
    adicional: string[];
  };
  projects: {
    title: string;
    description: string;
    technologies: string[];
    achievements: string[];
  }[];
  languages?: {
    name: string;
    level: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    year?: string;
  }[];
}

import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { CVData } from '../models/cv-data.model';

@Injectable({
  providedIn: 'root',
})
export class CVGeneratorService {
  /**
   * Genera y descarga el CV en formato PDF
   */
  generateCV(data: CVData): void {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Colores profesionales
    const primaryColor: [number, number, number] = [59, 130, 246]; // Azul
    const textColor: [number, number, number] = [30, 41, 59]; // Gris oscuro
    const lightGray: [number, number, number] = [226, 232, 240]; // Gris claro

    // Header con nombre y título
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(data.personalInfo.fullName, margin, 20);

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(data.personalInfo.title, margin, 28);

    yPosition = 50;

    // Información de contacto
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    const contactInfo: string[] = [];
    if (data.personalInfo.email) {
      contactInfo.push(`📧 ${data.personalInfo.email}`);
    }
    if (data.personalInfo.phone) {
      contactInfo.push(`📱 ${data.personalInfo.phone}`);
    }
    if (data.personalInfo.location) {
      contactInfo.push(`📍 ${data.personalInfo.location}`);
    }
    if (data.personalInfo.linkedin) {
      contactInfo.push(`💼 LinkedIn: ${data.personalInfo.linkedin}`);
    }
    if (data.personalInfo.github) {
      contactInfo.push(`💻 GitHub: ${data.personalInfo.github}`);
    }

    const contactText = contactInfo.join(' | ');
    doc.text(contactText, margin, yPosition, {
      maxWidth: contentWidth,
      align: 'left',
    });

    yPosition += 15;

    // Línea divisoria
    doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Resumen profesional
    this.addSectionTitle(doc, 'RESUMEN PROFESIONAL', margin, yPosition, primaryColor);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
    doc.text(summaryLines, margin, yPosition);
    yPosition += summaryLines.length * 5 + 5;

    // Experiencia
    this.addSectionTitle(doc, 'EXPERIENCIA', margin, yPosition, primaryColor);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${data.experience.years} de Experiencia`, margin, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'normal');
    const expLines = doc.splitTextToSize(data.experience.description, contentWidth);
    doc.text(expLines, margin, yPosition);
    yPosition += expLines.length * 5 + 8;

    // Proyectos destacados
    if (data.projects && data.projects.length > 0) {
      this.addSectionTitle(doc, 'PROYECTOS DESTACADOS', margin, yPosition, primaryColor);
      yPosition += 8;

      data.projects.forEach((project, index) => {
        if (yPosition > pageHeight - 60) {
          doc.addPage();
          yPosition = margin;
        }

        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(project.title, margin, yPosition);
        yPosition += 6;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        const projDesc = doc.splitTextToSize(project.description, contentWidth);
        doc.text(projDesc, margin, yPosition);
        yPosition += projDesc.length * 4 + 3;

        // Tecnologías
        if (project.technologies && project.technologies.length > 0) {
          doc.setFont('helvetica', 'italic');
          doc.text(`Stack: ${project.technologies.join(', ')}`, margin, yPosition);
          yPosition += 5;
        }

        // Logros
        if (project.achievements && project.achievements.length > 0) {
          project.achievements.slice(0, 3).forEach((achievement) => {
            doc.setFont('helvetica', 'normal');
            doc.text(`• ${achievement}`, margin + 3, yPosition);
            yPosition += 5;
          });
        }

        yPosition += 5;
      });
    }

    // Habilidades técnicas
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      yPosition = margin;
    }

    this.addSectionTitle(doc, 'HABILIDADES TÉCNICAS', margin, yPosition, primaryColor);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Principales:', margin, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'normal');
    doc.text(data.skills.principal.join(', '), margin, yPosition);
    yPosition += 8;

    if (data.skills.complementario && data.skills.complementario.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.text('Complementarias:', margin, yPosition);
      yPosition += 6;

      doc.setFont('helvetica', 'normal');
      doc.text(data.skills.complementario.join(', '), margin, yPosition);
      yPosition += 8;
    }

    // Educación
    if (data.education && data.education.length > 0) {
      if (yPosition > pageHeight - 50) {
        doc.addPage();
        yPosition = margin;
      }

      this.addSectionTitle(doc, 'EDUCACIÓN', margin, yPosition, primaryColor);
      yPosition += 8;

      data.education.forEach((edu) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(edu.degree, margin, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        doc.text(edu.institution, margin, yPosition);
        if (edu.year) {
          doc.text(edu.year, pageWidth - margin - 20, yPosition, { align: 'right' });
        }
        yPosition += 8;
      });
    }

    // Idiomas
    if (data.languages && data.languages.length > 0) {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = margin;
      }

      this.addSectionTitle(doc, 'IDIOMAS', margin, yPosition, primaryColor);
      yPosition += 8;

      data.languages.forEach((lang) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`${lang.name}: ${lang.level}`, margin, yPosition);
        yPosition += 6;
      });
    }

    // Certificaciones
    if (data.certifications && data.certifications.length > 0) {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        yPosition = margin;
      }

      this.addSectionTitle(doc, 'CERTIFICACIONES', margin, yPosition, primaryColor);
      yPosition += 8;

      data.certifications.forEach((cert) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(cert.name, margin, yPosition);
        yPosition += 5;

        doc.setFont('helvetica', 'normal');
        doc.text(cert.issuer, margin, yPosition);
        if (cert.year) {
          doc.text(cert.year, pageWidth - margin - 20, yPosition, { align: 'right' });
        }
        yPosition += 7;
      });
    }

    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Página ${i} de ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    // Descargar el PDF
    const fileName = `${data.personalInfo.fullName.replace(/\s+/g, '-')}-CV.pdf`;
    doc.save(fileName);
  }

  /**
   * Agrega un título de sección con estilo
   */
  private addSectionTitle(
    doc: jsPDF,
    title: string,
    x: number,
    y: number,
    color: [number, number, number]
  ): void {
    doc.setFillColor(color[0], color[1], color[2]);
    doc.rect(x - 2, y - 5, 4, 8, 'F');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(title, x + 6, y);
  }
}

import { Injectable } from '@angular/core';

/** Archivo del CV en public/ (nombre ASCII para compatibilidad en todos los entornos) */
export const CV_PDF_FILE = 'CV-Andres-Pena-M.pdf';
export const CV_PDF_DOWNLOAD_NAME = 'CV - Andres Peña M.pdf';
export const CV_PDF_URL = `/${CV_PDF_FILE}`;

@Injectable({
  providedIn: 'root',
})
export class CvDownloadService {
  download(): void {
    fetch(CV_PDF_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No se pudo obtener el CV (${response.status})`);
        }
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = CV_PDF_DOWNLOAD_NAME;
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch(() => {
        window.open(CV_PDF_URL, '_blank', 'noopener');
      });
  }
}

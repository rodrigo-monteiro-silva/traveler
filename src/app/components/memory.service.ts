import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Memory } from './memory';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private readonly API = 'http://localhost:4080/memories';

  constructor(private http: HttpClient) {}

  list(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.API);
  }

  create(memory: Memory): Observable<Memory> {
    return this.http.post<Memory>(this.API, memory);
  }

  delete(id: number): Observable<Memory> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Memory>(url);
  }

  findById(id: number): Observable<Memory> {
    const url = `${this.API}/${id}`;
    return this.http.get<Memory>(url);
  }

  base64ToFile(base64Src: string, tipoArquivo: string) {
    const byteArray = new Uint8Array(
      atob(base64Src)
        .split('')
        .map((char) => char.charCodeAt(0))
    );
    return new Blob([byteArray], { type: tipoArquivo });
  }

  downloadBase64(file: string, nameFile: string = 'arquivo.pdf') {
    let blob = this.base64ToFile(file, '.pdf');
    const anchor = window.document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = nameFile;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }

  getImageToSrc(imagem?: any | undefined): string {
    if (!!imagem) {
      if (!!imagem?.file) {
        return (
          'data:image/' +
          imagem.fileNameOriginal.split('.')[
            imagem.fileNameOriginal.split('.').length - 1
          ] +
          ';base64,' +
          imagem.file
        );
      }
    }
    return '/assets/images/default.png';
  }
}

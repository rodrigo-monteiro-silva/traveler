import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
}

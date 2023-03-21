import { HttpClient } from '@angular/common/http';
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
}

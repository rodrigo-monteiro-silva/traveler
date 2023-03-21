import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-memory',
  templateUrl: './create-memory.component.html',
  styleUrls: ['./create-memory.component.css', '/src/responsive.css'],
})
export class CreateMemoryComponent implements OnInit {
  selectedPhoto = null;
  memory = {
    id: '1',
    photo: '',
    description: 'Teste',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onFileSelected(event) {
    this.selectedPhoto = event.target.files[0];
  }

  onUpload() {}

  createMemory() {
    alert('Novo pensamento criado');
  }

  cancel() {
    this.router.navigate(['/listMemory']);
  }
}

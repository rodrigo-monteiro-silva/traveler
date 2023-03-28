import { MemoryService } from './../memory.service';
import { Memory } from './../memory';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-memory',
  templateUrl: './create-memory.component.html',
  styleUrls: ['./create-memory.component.css', '/src/responsive.css'],
})
export class CreateMemoryComponent implements OnInit {
  selectedFile = null;
  memory: Memory = {
    photo: null,
    description: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: MemoryService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.photo;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('photo', this.selectedFile);
    this.http
      .post<Memory>(`http://localhost:4080/${this.memory.photo}`, fd)
      .subscribe((res) => {
        console.log(res);
      });
  }

  createMemory() {
    this.service.create(this.memory).subscribe((resp) => {
      if (resp) {
        this.router.navigate(['/listMemory']);
      }
    });
  }

  cancel() {
    this.router.navigate(['/listMemory']);
  }
}

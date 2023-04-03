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

  constructor(private router: Router, private service: MemoryService) {}

  ngOnInit(): void {}

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

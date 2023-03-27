import { Memory } from './../memory';
import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../memory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-memory',
  templateUrl: './delete-memory.component.html',
  styleUrls: ['./delete-memory.component.css'],
})
export class DeleteMemoryComponent implements OnInit {
  memory: Memory = {
    id: 0,
    photo: null,
    description: '',
  };

  constructor(
    private service: MemoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((memory) => {
      this.memory = memory;
    });
  }

  deleteMemory() {
    if (this.memory.id) {
      this.service.delete(this.memory.id).subscribe(() => {
        this.router.navigate(['/listMemory']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listMemory']);
  }
}

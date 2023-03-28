import { Component, Input, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'card-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css'],
})
export class MemoryComponent implements OnInit {
  @Input() memory: Memory = {
    photo: null,
    description: '',
  };

  constructor(public service: MemoryService) {}

  ngOnInit(): void {}
}

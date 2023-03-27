import { Component, Input, OnInit } from '@angular/core';
import { Memory } from '../memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css'],
})
export class MemoryComponent implements OnInit {
  @Input() memory: Memory = {
    photo: null,
    description: '',
  };

  constructor() {}

  ngOnInit(): void {}
}

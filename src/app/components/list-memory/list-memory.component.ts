import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-memory',
  templateUrl: './list-memory.component.html',
  styleUrls: ['./list-memory.component.css', '/src/responsive.css'],
})
export class ListMemoryComponent implements OnInit {
  memoryList = [
    {
      photo: '',
      description: '123',
    },
    {
      photo: '',
      description: '8821821821',
    },
    {
      photo: '',
      description: '8821821821',
    },
    {
      photo: '',
      description: '88218218218821821821882182182188218218218821821821',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  noMemory(): string {
    if (this.memoryList.length <= 0) {
      return 'visual-box-b';
    }
    return 'visual-box-a';
  }
}

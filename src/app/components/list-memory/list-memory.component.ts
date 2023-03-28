import { Memory } from './../memory';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-list-memory',
  templateUrl: './list-memory.component.html',
  styleUrls: ['./list-memory.component.css', '/src/responsive.css'],
})
export class ListMemoryComponent implements OnInit {
  memoryList: Memory[] = [];

  constructor(private service: MemoryService) {}

  ngOnInit(): void {
    this.service.list().subscribe((memoryList) => {
      this.memoryList = memoryList;
      console.log(this.memoryList);
    });
  }

  noMemory(): string {
    if (this.memoryList.length <= 0) {
      return 'visual-box-b';
    }
    return 'visual-box-a';
  }
}

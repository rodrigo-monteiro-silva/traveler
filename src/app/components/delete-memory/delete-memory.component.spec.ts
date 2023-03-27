import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMemoryComponent } from './delete-memory.component';

describe('DeleteMemoryComponent', () => {
  let component: DeleteMemoryComponent;
  let fixture: ComponentFixture<DeleteMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

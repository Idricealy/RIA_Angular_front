import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddStudentComponent } from './modal-add-student.component';

describe('ModalAddStudentComponent', () => {
  let component: ModalAddStudentComponent;
  let fixture: ComponentFixture<ModalAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

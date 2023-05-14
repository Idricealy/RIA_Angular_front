import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewCourseComponent } from './modal-new-course.component';

describe('ModalNewCourseComponent', () => {
  let component: ModalNewCourseComponent;
  let fixture: ComponentFixture<ModalNewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

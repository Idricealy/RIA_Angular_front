import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddUeComponent } from './modal-add-ue.component';

describe('ModalAddUeComponent', () => {
  let component: ModalAddUeComponent;
  let fixture: ComponentFixture<ModalAddUeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddUeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

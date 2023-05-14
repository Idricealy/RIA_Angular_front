import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddFiliereComponent } from './modal-add-filiere.component';

describe('ModalAddFiliereComponent', () => {
  let component: ModalAddFiliereComponent;
  let fixture: ComponentFixture<ModalAddFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

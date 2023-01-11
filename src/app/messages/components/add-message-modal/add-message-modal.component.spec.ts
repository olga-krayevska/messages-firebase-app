import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessageModalComponent } from './add-message-modal.component';

describe('AddMessageModalComponent', () => {
  let component: AddMessageModalComponent;
  let fixture: ComponentFixture<AddMessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMessageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

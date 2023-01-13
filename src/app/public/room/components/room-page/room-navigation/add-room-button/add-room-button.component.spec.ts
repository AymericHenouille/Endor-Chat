import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomButtonComponent } from './add-room-button.component';

describe('AddRoomButtonComponent', () => {
  let component: AddRoomButtonComponent;
  let fixture: ComponentFixture<AddRoomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

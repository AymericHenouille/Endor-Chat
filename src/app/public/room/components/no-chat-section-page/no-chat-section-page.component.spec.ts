import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChatSectionPageComponent } from './no-chat-section-page.component';

describe('NoChatSectionPageComponent', () => {
  let component: NoChatSectionPageComponent;
  let fixture: ComponentFixture<NoChatSectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoChatSectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoChatSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

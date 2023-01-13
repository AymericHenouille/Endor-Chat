import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageFlowComponent } from './chat-message-flow.component';

describe('ChatMessageFlowComponent', () => {
  let component: ChatMessageFlowComponent;
  let fixture: ComponentFixture<ChatMessageFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMessageFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { MessageService } from '../message.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  let messagesStub: string[];
  let messageServiceSpy;

  beforeEach(() => {
    // setup MessageService spy

    messagesStub = [];
    messageServiceSpy = jasmine.createSpyObj('MessageService', [
      'add',
      'clear',
      'getAll'
    ]);

    messageServiceSpy.getAll.and.returnValue(messagesStub);

    // setup TestBed

    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      providers: [
        {
          provide: MessageService,
          useValue: messageServiceSpy
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have property messages', () => {
    expect(component.messages).toEqual(messagesStub);
  });

  it('should have method clearMessages()', () => {
    expect(typeof component.clearMessages).toEqual('function');

    expect(messageServiceSpy.clear).toHaveBeenCalledTimes(0);
    component.clearMessages();
    expect(messageServiceSpy.clear).toHaveBeenCalled();
  });

  it('should display only if there is message to shown', fakeAsync(() => {
    messagesStub.push('foo');

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('h2'))).toBeTruthy();

    messagesStub.splice(0, messagesStub.length);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('h2'))).toBeNull();
  }));

  it('should have button to clear messages', fakeAsync(() => {
    messagesStub.push('foo');

    fixture.detectChanges();

    const clearButton = fixture.debugElement.query(By.css('button'));
    expect(clearButton).toBeTruthy();

    clearButton.nativeElement.click();
    expect(messageServiceSpy.clear).toHaveBeenCalled();
  }));

  it('should display all messages', fakeAsync(() => {
    messagesStub.push('foo', 'bar');

    fixture.detectChanges();

    const divMessages = fixture.debugElement.queryAll(By.css('div'));

    expect(divMessages.length).toEqual(2);
    expect(divMessages[0].nativeElement.textContent.trim()).toEqual('foo');
    expect(divMessages[1].nativeElement.textContent.trim()).toEqual('bar');
  }));
});

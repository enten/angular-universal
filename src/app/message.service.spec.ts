import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ MessageService ]
    });

    service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have property messages', () => {
    expect(Array.isArray(service.messages)).toBeTruthy();
  });

  it('should have method add(string)', () => {
    expect(typeof service.add).toEqual('function');

    service.add('foo');
    expect(service.messages.pop()).toEqual('foo');
  });

  it('should have method clear()', () => {
    expect(typeof service.clear).toEqual('function');

    service.messages = [ 'foo' ];
    expect(service.messages.length).toBeGreaterThan(0);

    service.clear();
    expect(service.messages.length).toEqual(0);
  });

  it('should have method getAll()', () => {
    expect(typeof service.getAll).toEqual('function');

    service.messages = [ 'foo' ];
    expect(service.getAll().length).toEqual(1);
    expect(service.getAll()).toEqual([ 'foo' ]);
  });
});

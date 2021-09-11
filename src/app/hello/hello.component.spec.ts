import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HelloComponent } from './hello.component';


describe('HelloComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        HelloComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(HelloComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  });

  it('should render title as rocket message', () => {
    const fixture = TestBed.createComponent(HelloComponent);
    fixture.detectChanges();
    const rocketMessage = fixture.debugElement.query(By.css('.content span'))?.nativeElement;
    expect(rocketMessage?.textContent).toContain('angular app is running!');
  });
});

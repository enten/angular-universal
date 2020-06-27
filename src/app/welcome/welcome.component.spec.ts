import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { WelcomeComponent } from './welcome.component';


describe('WelcomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        WelcomeComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'angular'`, async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  }));

  it('should render title as rocket message', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const rocketMessage = fixture.debugElement.query(By.css('#rocket-message'))?.nativeElement;
    expect(rocketMessage?.textContent).toContain('angular app is running!');
  }));
});

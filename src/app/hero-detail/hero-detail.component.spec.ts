import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  class MockActivatedRoute extends ActivatedRoute {
    snapshot = {
      paramMap: {
        keys: [ 'id' ],
        get() {
          return 'fakeid';
        },
        getAll() { return [ 'fakeid' ]; },
        has() { return true; }
      } as ParamMap
    } as ActivatedRouteSnapshot;
  }

  const mockActivatedRoute: ActivatedRoute = new MockActivatedRoute();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [
        FormsModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

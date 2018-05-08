import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const mockActivatedRoute: ActivatedRoute = new ActivatedRoute();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

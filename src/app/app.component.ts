import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';

import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    if (environment.production) {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'ng-version');
    }
  }
}

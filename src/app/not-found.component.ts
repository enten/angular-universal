import { Component, OnInit, Optional, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

interface PartialResponse {
  status(code: number): this;
}

@Component({
  selector: 'app-not-found',
  template: '<h1>Page Not Found</h1>',
})
export class NotFoundComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    @Optional() @Inject(RESPONSE) private response: PartialResponse,
  ) { }

  ngOnInit() {
    if (isPlatformServer(this.platformId) && this.response) {
      this.response.status(404);
    }
  }
}

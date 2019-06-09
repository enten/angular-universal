import { Component, Inject, OnInit, Optional } from '@angular/core';
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
    @Optional() @Inject(RESPONSE) private response: PartialResponse,
  ) { }

  ngOnInit(): void {
    if (this.response) {
      this.response.status(404);
    }
  }
}

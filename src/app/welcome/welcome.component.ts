import { Component } from '@angular/core';

import { AppConfigService } from '../app-config.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  title = 'app';

  constructor(
    public readonly universalConfigService: AppConfigService,
  ) {
    this.title = universalConfigService.get<string>('foo');
  }
}

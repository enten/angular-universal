import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  title = 'angular';
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs21-root',
  templateUrl: './rs21-demo-app.component.html',
  styleUrls: ['./rs21-demo-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rs21DemoAppComponent implements OnInit {
  constructor() {
  }

  public ngOnInit(): void {
  }
}

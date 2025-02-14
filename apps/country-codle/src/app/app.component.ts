import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponent} from '@angular-monorepo/ui'

@Component({
  imports: [RouterModule, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'country-codle';
}

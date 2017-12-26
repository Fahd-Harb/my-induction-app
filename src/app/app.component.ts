import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  basicForm = new FormGroup({
    name: new FormControl()
  });
}

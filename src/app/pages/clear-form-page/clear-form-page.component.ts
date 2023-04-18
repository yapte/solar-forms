import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collapseAnimation } from 'src/app/animations/collapse.animation';

@Component({
  selector: 'app-clear-form-page',
  templateUrl: './clear-form-page.component.html',
  styleUrls: ['./clear-form-page.component.scss'],
  animations: [collapseAnimation],
  // encapsulation: ViewEncapsulation.None,
})
export class ClearFormPageComponent {
  form: FormGroup = new FormGroup({
    c1: new FormControl<string>('', [Validators.required]),
    c2: new FormControl<string | null>(null, [Validators.required]),
    c3: new FormControl<number | null>(null, [Validators.required, Validators.min(1), Validators.max(100)]),
  });

  validate() {
    this.form.markAllAsTouched();
  }

  submit() {
    console.log(this.form.value);
  }
}

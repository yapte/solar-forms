import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl<string>({ value: 'qwerfdghnm', disabled: false }),
    isInputAgeDisabled: new FormControl<boolean>(false),
    age: new FormControl<number>(0),
    params: new FormGroup({
      size: new FormControl<number>(12),
      width: new FormControl<number>(122),
    }),
    products: new FormArray([
      new FormGroup({
        name: new FormControl<string>({ value: 'qwerfdghnm', disabled: false }),
        price: new FormControl<number>(1230),
      })
    ]),
  });

  ngOnInit() {
    const ageControl: FormControl = this.form.get('age') as FormControl;
    const isInputAgeDisabledControl: FormControl<boolean> = this.form.get('isInputAgeDisabled') as FormControl<boolean>;

    isInputAgeDisabledControl.valueChanges
      .subscribe(value => {
        console.log(value);
        if (value) {
          ageControl.disable();
        } else {
          ageControl.enable();
        }
      });
  }

  submit() {
    console.log('SUBMIT', this.form.value);

    const x = (this.form.get('products') as FormArray).controls.at(0);
    console.log('x', x);
    console.log('form', this.form);

  }
}

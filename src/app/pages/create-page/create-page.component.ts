import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    chb: new FormControl<boolean>({ value: false, disabled: true }),
    name: new FormControl<string>({ value: 'qwerfdghnm', disabled: false }, [Validators.required]),
    isInputAgeDisabled: new FormControl<boolean>(false),
    age: new FormControl<number>(20, [Validators.required, Validators.min(12)]),
    params: new FormGroup({
      size: new FormControl<number>(12),
      width: new FormControl<number>(122),
    }),
    products: new FormArray([
      // this._genepateProductForm(),
      // this._genepateProductForm(),
      // this._genepateProductForm(), 
    ]),
  });

  get productFormArray(): AbstractControl[] {
    return (this.form.get('products') as FormArray).controls
  }

  productFormArray$ = (this.form.get('products') as FormArray).valueChanges;

  private _genepateProductForm(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>({ value: 'qwerfdghnm', disabled: false }),
      price: new FormControl<number>(1230, [Validators.required]),
      password: new FormControl<string>(''),
      passwordConfirm: new FormControl<string>(''),
    })
  }

  qwerty$ = of(123);

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

  append() {
    console.log('append');
    (this.form.get('products') as FormArray)
      .push(this._genepateProductForm());
  }

  remove(index: number) {
    (this.form.get('products') as FormArray)
      .removeAt(index);
  }

  submit() {
    console.log('SUBMIT', this.form.value);

    const x = (this.form.get('products') as FormArray).controls.at(0);
    console.log('x', x);
    console.log('form', this.form);

  }

  toggleChb(value: boolean) {
    console.log('CHB', value);
    (this.form.get('chb') as FormControl).setValue(value);
  }
}

import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chb',
  templateUrl: './chb.component.html',
  styleUrls: ['./chb.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChbComponent),
    multi: true,
  }],
})
export class ChbComponent implements ControlValueAccessor {
  isChecked = false;
  isDisabled = false;

  onChange: (value: boolean) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(value: boolean): void {
    this.isChecked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  toggle() {
    if (this.isDisabled) return;

    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
    this.onTouched();
  }
}

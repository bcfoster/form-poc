import { Directive, Input } from '@angular/core';
import { FormControlState, FormControlValueTypes } from 'ngrx-forms';

@Directive()
export class FormControlBase {
  @Input({ required: true }) control!: FormControlState<FormControlValueTypes>;

  get id(): string {
    return this.control.id.replace('.', '-');
  }

  get isOptional(): boolean {
    return 'optional' in this.control.userDefinedProperties;
  }
}

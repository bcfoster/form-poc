import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControlState, NgrxFormsModule, SetValueAction } from 'ngrx-forms';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'time-input',
  imports: [NgClass, NgrxFormsModule, ValidationErrorsComponent],
  templateUrl: './time-input.component.html',
  styles: '',
})
export class TimeInputComponent {
  @Input({ required: true }) control!: FormControlState<string>;
  @Input({ required: true }) label = '';
  @Input() optional: boolean | undefined;

  @Input() requiredLabel = '';

  constructor(private readonly store: Store) {}

  get id(): string {
    return (
      this.label
        ?.toLowerCase()
        .replace(' ', '-')
        .replace(/[^\w-]/gi, '') ?? ''
    );
  }

  clear() {
    this.store.dispatch(new SetValueAction(this.control.id, '00:00'));
  }
}

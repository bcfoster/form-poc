import { Component, Input } from '@angular/core';
import { FormControlState, NgrxFormsModule } from 'ngrx-forms';
import { NgClass } from '@angular/common';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

@Component({
  selector: 'date-input',
  imports: [NgClass, NgrxFormsModule, ValidationErrorsComponent],
  templateUrl: './date-input.component.html',
  styles: '',
})
export class DateInputComponent {
  @Input({ required: true }) control: FormControlState<string> | null = null;
  @Input({ required: true }) label = '';
  @Input() maxDate = '';
  @Input() minDate = '1900-01-01';
  @Input() optional: boolean | undefined;

  @Input() requiredLabel = '';

  @Input() earlierThan = '';
  @Input() laterThan = '';

  get id(): string {
    return (
      this.label
        ?.toLowerCase()
        .replace(' ', '-')
        .replace(/[^\w-]/gi, '') ?? ''
    );
  }
}

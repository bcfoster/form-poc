import { Component, Input } from '@angular/core';
import { FormControlState, NgrxFormsModule } from 'ngrx-forms';
import { NgClass } from '@angular/common';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

@Component({
  selector: 'text-input',
  imports: [NgClass, NgrxFormsModule, ValidationErrorsComponent],
  templateUrl: './text-input.component.html',
  styles: '',
})
export class TextInputComponent {
  @Input({ required: true }) control: FormControlState<string> | null = null;
  @Input({ required: true }) label = '';
  @Input() description = '';
  @Input() maxLength: number | undefined;
  @Input() optional: boolean | undefined;

  @Input() digitsLabel = '';
  @Input() emailLabel = '';
  @Input() minLengthLabel = '';
  @Input() requiredLabel = '';

  get id(): string {
    return (
      this.label
        ?.toLowerCase()
        .replace(' ', '-')
        .replace(/[^\w-]/gi, '') ?? ''
    );
  }
}

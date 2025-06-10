import { Component, Input } from '@angular/core';
import { FormControlState, NgrxFormsModule } from 'ngrx-forms';
import { NgClass } from '@angular/common';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

@Component({
  selector: 'text-area',
  imports: [NgrxFormsModule, NgClass, ValidationErrorsComponent],
  templateUrl: './text-area.component.html',
  styles: '',
})
export class TextAreaComponent {
  @Input({ required: true }) control: FormControlState<string> | null = null;
  @Input({ required: true }) label = '';
  @Input() maxLength: number | undefined;
  @Input() optional: boolean | undefined;

  @Input() requiredLabel = '';
  @Input() minLengthLabel = '';
  @Input() minWordLengthLabel = '';

  get id(): string {
    return (
      this.label
        ?.toLowerCase()
        .replace(' ', '-')
        .replace(/[^\w-]/gi, '') ?? ''
    );
  }
}

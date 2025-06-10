import { Component, Input } from '@angular/core';
import { FormControlState, FormControlValueTypes, NgrxFormsModule } from 'ngrx-forms';

@Component({
  selector: 'validation-errors',
  imports: [NgrxFormsModule],
  templateUrl: './validation-errors.component.html',
  styles: '',
})
export class ValidationErrorsComponent {
  @Input({ required: true }) control!: FormControlState<FormControlValueTypes>;

  @Input() maxLengthLabel = '';
  @Input() minLengthLabel = '';
  @Input() minWordLengthLabel = '';
  @Input() requiredLabel = '';
  @Input() requiredTrueLabel = '';
  @Input() requiredFalseLabel = '';

  @Input() digits = 'Please enter only numbers';
  @Input() email = 'Please enter your email address in the format name@email.com';
}

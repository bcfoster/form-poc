import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControlState, NgrxFormsModule } from 'ngrx-forms';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

@Component({
  selector: 'select-option',
  imports: [NgClass, NgrxFormsModule, ValidationErrorsComponent],
  templateUrl: './select-option.component.html',
  styles: '',
})
export class SelectOptionComponent {
  @Input({ required: true }) control: FormControlState<string> | null = null;
  @Input({ required: true }) options: { key: string; value: string }[] = [];
  @Input() defaultLabel: string | undefined;
  @Input() label = '';
  @Input() optional: boolean | undefined;

  @Input() requiredLabel = '';

  get id(): string {
    return (
      this.label
        .replace(/\s+/g, '-')
        .replace(/[^\w/-]/gi, '')
        .toLowerCase() ?? ''
    );
  }
}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControlState, NgrxFormsModule } from 'ngrx-forms';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

// TODO: can share a base class with multi-radio-group
@Component({
  selector: 'binary-radio-group',
  imports: [NgrxFormsModule, NgClass, ValidationErrorsComponent],
  templateUrl: './binary-radio-group.component.html',
  styles: '',
})
export class BinaryRadioGroupComponent {
  @Input({ required: true }) control: FormControlState<boolean | null> | null = null;
  @Input({ required: true }) label = '';
  @Input() description = '';
  @Input() horizontal = false;
  @Input() optional: boolean | undefined;

  @Input() trueLabel: string | undefined;
  @Input() falseLabel: string | undefined;

  @Input() requiredLabel = 'Please enter a value';

  get options(): { key: boolean; value: string }[] {
    return [
      { key: true, value: this.trueLabel ?? 'Yes' },
      { key: false, value: this.falseLabel ?? 'No' },
    ];
  }

  get id(): string {
    return (
      this.label
        .replace(/\s+/g, '-')
        .replace(/[^\w/-]/gi, '')
        .toLowerCase() ?? ''
    );
  }
}

import { Component, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';

import { BinaryRadioGroupComponent } from '../../../form-controls/binary-radio-group/binary-radio-group.component';
import { CheckboxComponent } from '../../../form-controls/checkbox/checkbox.component';
import { DateInputComponent } from '../../../form-controls/date-input/date-input.component';
import { TextAreaComponent } from '../../../form-controls/text-area/text-area.component';
import { TextInputComponent } from '../../../form-controls/text-input/text-input.component';
import * as treatmentDetails from '../../../state/form/treatment-details/treatment-details.form';

@Component({
  selector: 'medical-care-form',
  imports: [
    BinaryRadioGroupComponent,
    CheckboxComponent,
    DateInputComponent,
    TextAreaComponent,
    TextInputComponent,
  ],
  templateUrl: './medical-care-form.component.html',
  styles: ``,
})
export class ContactInfoFormComponent {
  @Input({ required: true }) form!: FormGroupState<treatmentDetails.Form>;
}

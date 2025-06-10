import { Component, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';

import { BinaryRadioGroupComponent } from '../../../form-controls/binary-radio-group/binary-radio-group.component';
import { TextAreaComponent } from '../../../form-controls/text-area/text-area.component';
import * as treatmentDetails from '../../../state/form/treatment-details/treatment-details.form';

@Component({
  selector: 'authorization-form',
  imports: [BinaryRadioGroupComponent, TextAreaComponent],
  templateUrl: './authorization-form.component.html',
  styles: ``,
})
export class AuthorizationFormComponent {
  @Input({ required: true }) form!: FormGroupState<treatmentDetails.Form>;
}

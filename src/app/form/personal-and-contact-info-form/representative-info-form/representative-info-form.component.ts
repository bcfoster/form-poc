import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroupState, NgrxFormsModule } from 'ngrx-forms';

import { BinaryRadioGroupComponent } from '../../../form-controls/binary-radio-group/binary-radio-group.component';
import { TextAreaComponent } from '../../../form-controls/text-area/text-area.component';
import { TextInputComponent } from '../../../form-controls/text-input/text-input.component';
import { SelectOptionComponent } from '../../../form-controls/select-option/select-option.component';
import * as representativeInfo from '../../../state/form/personal-and-contact-info/representative-information.form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'representative-info-form',
  imports: [
    BinaryRadioGroupComponent,
    CommonModule,
    NgrxFormsModule,
    SelectOptionComponent,
    TextAreaComponent,
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './representative-info-form.component.html',
  styles: ``,
})
export class RepresentativeInfoFormComponent {
  @Input({ required: true }) form!: FormGroupState<representativeInfo.Form>;
}

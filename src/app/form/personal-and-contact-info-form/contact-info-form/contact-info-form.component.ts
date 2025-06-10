import { Component, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';

import { SelectOptionComponent } from '../../../form-controls/select-option/select-option.component';
import { TextInputComponent } from '../../../form-controls/text-input/text-input.component';
import * as contactInfo from '../../../state/form/personal-and-contact-info/contact-info.form';
import { initialFormValue } from '../../../state/form/personal-and-contact-info/contact-info.form';

@Component({
  selector: 'contact-info-form',
  imports: [SelectOptionComponent, TextInputComponent],
  templateUrl: './contact-info-form.component.html',
  styles: ``,
})
export class ContactInfoFormComponent {
  @Input({ required: true }) form!: FormGroupState<contactInfo.Form>;
  @Input({ required: true }) isReportingForSelf = false;

  protected readonly STATES = STATES;
  protected readonly PROVINCES = PROVINCES;
  protected readonly initialFormValue = initialFormValue;
  protected readonly contactInfo = contactInfo;
}

export const PROVINCES = [
  { key: 'AB', value: 'Alberta' },
  { key: 'BC', value: 'British Columbia' },
  { key: 'MB', value: 'Manitoba' },
  { key: 'NB', value: 'New Brunswick' },
  { key: 'NL', value: 'Newfoundland and Labrador' },
  { key: 'NT', value: 'Northwest Territories' },
  { key: 'NS', value: 'Nova Scotia' },
  { key: 'ON', value: 'Ontario' },
  { key: 'PE', value: 'Prince Edward Island' },
  { key: 'QC', value: 'Quebec' },
  { key: 'SK', value: 'Saskatchewan' },
  { key: 'YT', value: 'Yukon' },
];

export const STATES = [
  { key: 'AL', value: 'Alabama' },
  { key: 'AK', value: 'Alaska' },
  { key: 'AZ', value: 'Arizona' },
  { key: 'AR', value: 'Arkansas' },
  { key: 'CA', value: 'California' },
  { key: 'CO', value: 'Colorado' },
  { key: 'CT', value: 'Connecticut' },
  { key: 'DE', value: 'Delaware' },
  { key: 'FL', value: 'Florida' },
  { key: 'GA', value: 'Georgia' },
  { key: 'HI', value: 'Hawaii' },
  { key: 'ID', value: 'Idaho' },
  { key: 'IL', value: 'Illinois' },
  { key: 'IN', value: 'Indiana' },
  { key: 'IA', value: 'Iowa' },
  { key: 'KS', value: 'Kansas' },
  { key: 'KY', value: 'Kentucky' },
  { key: 'LA', value: 'Louisiana' },
  { key: 'ME', value: 'Maine' },
  { key: 'MD', value: 'Maryland' },
  { key: 'MA', value: 'Massachusetts' },
  { key: 'MI', value: 'Michigan' },
  { key: 'MN', value: 'Minnesota' },
  { key: 'MS', value: 'Mississippi' },
  { key: 'MO', value: 'Missouri' },
  { key: 'MT', value: 'Montana' },
  { key: 'NE', value: 'Nebraska' },
  { key: 'NV', value: 'Nevada' },
  { key: 'NH', value: 'New Hampshire' },
  { key: 'NJ', value: 'New Jersey' },
  { key: 'NM', value: 'New Mexico' },
  { key: 'NY', value: 'New York' },
  { key: 'NC', value: 'North Carolina' },
  { key: 'ND', value: 'North Dakota' },
  { key: 'OH', value: 'Ohio' },
  { key: 'OK', value: 'Oklahoma' },
  { key: 'OR', value: 'Oregon' },
  { key: 'PA', value: 'Pennsylvania' },
  { key: 'RI', value: 'Rhode Island' },
  { key: 'SC', value: 'South Carolina' },
  { key: 'SD', value: 'South Dakota' },
  { key: 'TN', value: 'Tennessee' },
  { key: 'TX', value: 'Texas' },
  { key: 'UT', value: 'Utah' },
  { key: 'VT', value: 'Vermont' },
  { key: 'VA', value: 'Virginia' },
  { key: 'WA', value: 'Washington' },
  { key: 'WV', value: 'West Virginia' },
  { key: 'WI', value: 'Wisconsin' },
  { key: 'WY', value: 'Wyoming' },
];

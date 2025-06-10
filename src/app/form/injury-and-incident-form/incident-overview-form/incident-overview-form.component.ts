import { PushPipe } from '@ngrx/component';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState, NgrxFormsModule } from 'ngrx-forms';
import { Observable } from 'rxjs';

import { CheckboxComponent } from '../../../form-controls/checkbox/checkbox.component';
import { DateInputComponent } from '../../../form-controls/date-input/date-input.component';
import { MultiRadioGroupComponent } from '../../../form-controls/multi-radio-group/multi-radio-group.component';
import { TextAreaComponent } from '../../../form-controls/text-area/text-area.component';
import { TimeInputComponent } from '../../../form-controls/time-input/time-input.component';
import { ValidationErrorsComponent } from '../../../form-controls/validation-errors/validation-errors.component';
import * as formSelectors from '../../../state/form/form.selectors';
import * as incidentOverview from '../../../state/form/injury-and-incident/incident-overview.form';

@Component({
  selector: 'incident-overview-form',
  imports: [
    CheckboxComponent,
    DateInputComponent,
    MultiRadioGroupComponent,
    NgrxFormsModule,
    PushPipe,
    TextAreaComponent,
    TimeInputComponent,
    ValidationErrorsComponent,
  ],
  templateUrl: './incident-overview-form.component.html',
  styles: ``,
})
export class IncidentOverviewFormComponent {
  @Input({ required: true }) form!: FormGroupState<incidentOverview.Form>;

  // within the previous seven days
  isInjuryRecent$: Observable<boolean>;

  constructor(private readonly store: Store) {
    this.isInjuryRecent$ = this.store.select(formSelectors.isInjuryRecent);
  }
}

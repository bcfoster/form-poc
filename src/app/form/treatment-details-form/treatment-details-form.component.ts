import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LetDirective, PushPipe } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { FormGroupState, MarkAsSubmittedAction, NgrxFormsModule } from 'ngrx-forms';
import { Observable } from 'rxjs';

import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { ContactInfoFormComponent } from './medical-care-form/medical-care-form.component';
import { TextAreaComponent } from '../../form-controls/text-area/text-area.component';
import { initialFormState } from '../../state/form/form.reducer';
import * as formSelectors from '../../state/form/form.selectors';
import * as form from '../../state/form/treatment-details/treatment-details.form';

@Component({
  selector: 'treatment-details-form',
  imports: [
    AuthorizationFormComponent,
    ContactInfoFormComponent,
    LetDirective,
    NgrxFormsModule,
    PushPipe,
    RouterLink,
    TextAreaComponent,
  ],
  templateUrl: './treatment-details-form.component.html',
  styles: ``,
})
export class TreatmentDetailsFormComponent {
  form$: Observable<FormGroupState<form.Form>>;
  isReportingForSelf$: Observable<boolean | null>;

  constructor(private readonly store: Store) {
    this.form$ = this.store.select(formSelectors.selectTreatmentDetailsFrom);
    this.isReportingForSelf$ = this.store.select(formSelectors.selectIsReportingForSelf);
  }

  save() {
    this.store.dispatch(new MarkAsSubmittedAction(initialFormState.controls.treatmentDetails.id));
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { EmploymentAndEmployerInfoFormComponent } from './form/employment-and-employer-info-form/employment-and-employer-info-form.component';
import { InjuryAndIncidentFormComponent } from './form/injury-and-incident-form/injury-and-incident-form.component';
import { PersonalAndContactInfoFormComponent } from './form/personal-and-contact-info-form/personal-and-contact-info-form.component';
import { TreatmentDetailsFormComponent } from './form/treatment-details-form/treatment-details-form.component';
import { FormRootComponent } from './form-root/form-root.component';
import { FormShellComponent } from './form-shell/form-shell.component';
import { FormSummaryComponent } from './form-summary/form-summary.component';
import { SignInComponent } from './sign-in/sign-in.component';

import * as authSelectors from './state/auth/auth.selectors';
import * as draftSelectors from './state/drafts/drafts.selectors';

const isAuthenticated: CanActivateFn = () => {
  const router = inject(Router);
  return inject(Store)
    .select(authSelectors.selectIsAuthenticated)
    .pipe(map((isAuthenticated) => (isAuthenticated ? true : router.createUrlTree(['/sign-in']))));
};

export const isFormActive: CanActivateFn = () => {
  const router = inject(Router);
  return inject(Store)
    .select(draftSelectors.selectActiveDraftId)
    .pipe(map((id) => (id ? true : router.createUrlTree(['/']))));
};

export const routes: Routes = [
  { path: '', canActivate: [isAuthenticated], pathMatch: 'full', component: FormShellComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'form',
    canActivateChild: [isFormActive],
    children: [
      {
        path: '',
        component: FormRootComponent,
      },
      {
        path: 'personal-and-contact-info',
        component: PersonalAndContactInfoFormComponent,
      },
      {
        path: 'incident-and-injury',
        component: InjuryAndIncidentFormComponent,
      },
      {
        path: 'treatment-details',
        component: TreatmentDetailsFormComponent,
      },
      {
        path: 'employment-and-employer-info',
        component: EmploymentAndEmployerInfoFormComponent,
      },
      {
        path: 'summary',
        component: FormSummaryComponent,
      },
    ],
  },
];

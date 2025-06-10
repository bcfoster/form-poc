import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { FormGroupState, NgrxFormsModule } from 'ngrx-forms';
import { Observable } from 'rxjs';

import * as authReducer from '../state/auth/auth.reducer';
import * as authSelectors from '../state/auth/auth.selectors';
import { TextInputComponent } from '../form-controls/text-input/text-input.component';
import { authActions } from '../state/auth/auth.actions';

@Component({
  selector: 'sign-in',
  imports: [LetDirective, NgClass, NgrxFormsModule, TextInputComponent],
  templateUrl: './sign-in.component.html',
  styles: ``,
})
export class SignInComponent {
  form$: Observable<FormGroupState<authReducer.Form>>;

  constructor(private readonly store: Store) {
    this.form$ = this.store.select(authSelectors.selectForm);
  }

  signIn() {
    this.store.dispatch(authActions.signIn());
  }
}

import { createReducer, on } from '@ngrx/store';
import {
  createFormGroupState,
  FormGroupState,
  onNgrxForms,
  setValue,
  updateGroup,
  wrapReducerWithFormStateUpdate,
} from 'ngrx-forms';

import { authActions } from './auth.actions';

export const FORM_ID = 'auth';

export interface Form {
  username: string;
  password: string;
}

export const initialFormValue: Form = {
  username: '',
  password: '',
};

export interface State {
  form: FormGroupState<Form>;
  isAuthenticated: boolean;
}

export const initialFormState = createFormGroupState<Form>(FORM_ID, initialFormValue);

export const initialState: State = {
  form: initialFormState,
  isAuthenticated: false,
};

const rawReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(authActions.signedIn, (state) => ({
    ...state,
    form: setValue(state.form, initialFormValue),
    isAuthenticated: true,
  })),
  on(authActions.signedOut, (state) => ({
    ...state,
    isAuthenticated: false,
  })),
);

export const validate = (form: FormGroupState<Form>) => updateGroup<Form>(form, {});

export const reducer = wrapReducerWithFormStateUpdate(
  rawReducer,
  (state) => state.form,
  (form) => validate(form),
);

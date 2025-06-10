import { createSelector } from '@ngrx/store';

import { auth } from '.';

export const { selectAuthState, selectForm, selectIsAuthenticated } = auth.feature;

export const selectFormValue = createSelector(selectForm, (form) => form.value);

import { isDevMode } from '@angular/core';
import { createFeature, MetaReducer } from '@ngrx/store';
import { reducer, State } from './auth.reducer';

export const FEATURE_KEY = 'auth';

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const feature = createFeature({ name: FEATURE_KEY, reducer });

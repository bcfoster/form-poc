import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Sign In': emptyProps(),
    'Signed In': props<{ redirectUrl: string }>(),
    'Signed Out': emptyProps(),
  },
});

/* eslint-disable */

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';

import { authActions } from './auth.actions';
import * as authSelectors from './auth.selectors';
import { API_BASE_URL } from '../../services/wrio-api.service';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly store: Store,
    @Inject(API_BASE_URL) public apiUrl: string,
  ) {
    this.signIn$ = createEffect(() =>
      actions$.pipe(
        ofType(authActions.signIn),
        withLatestFrom(this.store.select(authSelectors.selectFormValue)),
        switchMap(() => this.http.get(`${this.apiUrl}/api/Router/decide?userId=reza.sh`)),
        tap((response) => console.log(JSON.stringify(response))),
        map((response: any) => authActions.signedIn({ redirectUrl: response.redirectUrl })),
      ),
    );

    this.signedIn$ = createEffect(
      () =>
        actions$.pipe(
          ofType(authActions.signedIn),
          tap((action) => this.router.navigate([action.redirectUrl])),
        ),
      { dispatch: false },
    );
  }

  signIn$;
  signedIn$;
}

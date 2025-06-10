/* eslint-disable @typescript-eslint/no-explicit-any */

import { Boxed, unbox, ValidationErrors } from 'ngrx-forms';

export interface LengthValidationError {
  length: number;
  value: string | any[];
  actualLength: number;
}

declare module 'ngrx-forms' {
  export interface ValidationErrors {
    length?: LengthValidationError;
  }
}

/**
 * A validation function that requires a `string` or `array` value to have a length.
 * Considers `null`, `undefined`, empty strings and empty arrays as valid. Combine this
 * function with the `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
 ```typescript
 {
 length: {
 length: number;
 value: string;
 actualLength: number;
 };
 }
 ```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
 ```typescript
 updateGroup<MyFormValue>({
 accountNumber: validate(length(9)),
 })
 ```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function length(lengthParam: number) {
  if (lengthParam === null || lengthParam === undefined) {
    throw new Error(
      `The length Validation function requires the length parameter to be a non-null number, got ${lengthParam}!`,
    );
  }

  return <T extends string | Boxed<string> | any[] | Boxed<any[]> | null | undefined>(
    value: T,
  ): ValidationErrors => {
    value = unbox(value);

    if (value === null || value === undefined) {
      return {};
    }

    const length = (value as string | any[]).length;

    if (length === 0) {
      return {}; // don't validate empty values to allow optional controls
    }

    if (length === lengthParam) {
      return {};
    }

    return {
      length: {
        length: lengthParam,
        value: value as string,
        actualLength: length,
      },
    };
  };
}

/* eslint-disable @typescript-eslint/no-unused-vars */

import { setValue, updateGroup } from 'ngrx-forms';
import { validate } from '../../ngrx-forms/validate';
import { minLength, required } from 'ngrx-forms/validation';
import { digits } from '../../ngrx-forms/digits';
import { length } from '../../ngrx-forms/length';
import { optional } from '../../ngrx-forms/optional';

// TODO: update other string literal unions to use this method
const genders = ['Man', 'Non-binary', 'Two-Spirit', 'Woman', '__<CUSTOM>__'] as const;
export type Gender = (typeof genders)[number];

export type SexAtBirth = 'Female' | 'Intersex' | 'Male' | 'Unknown';
export type Pronouns = 'He/him' | 'She/her' | 'They/them' | 'Ze/zir' | '__<CUSTOM>__';
export type IndigenousAncestry = 'Status' | 'NonStatus' | 'Inuit' | 'Metis' | 'Other';

export interface DemographicsForm {
  sexAtBirth: SexAtBirth | '';
  gender: Gender | '';
  customGender: '';
  pronouns: Pronouns | '';
  customPronouns: '';
  indigenousInd: boolean | null;
  associationNation: string;
  ancestry: IndigenousAncestry | '';
}

export interface DateForm {
  year: string;
  month: string;
  day: string;
  value: string;
}

export interface DateOfBirthForm {
  year: string;
  month: string;
  day: string;
}

export interface Form {
  haveClaimNumber: boolean | null;
  claimNumber: string;
  legalFirstName: string;
  preferredFirstName: string;
  middleName: string;
  lastName: string;
  demographics: DemographicsForm;
  dateOfBirth: string;
  havePhn: boolean | null;
  phn: string;
  interpreter: boolean | null;
  preferredLanguage: string;
  heightFeet: string;
  heightInches: string;
  weight: string;
}

export const initialFormValue: Form = {
  haveClaimNumber: null,
  claimNumber: '',
  legalFirstName: '',
  preferredFirstName: '',
  middleName: '',
  lastName: '',
  demographics: {
    sexAtBirth: '',
    gender: '',
    customGender: '',
    pronouns: '',
    customPronouns: '',
    indigenousInd: null,
    ancestry: '',
    associationNation: '',
  },
  dateOfBirth: '',
  havePhn: null,
  phn: '',
  interpreter: null,
  preferredLanguage: '',
  heightFeet: '',
  heightInches: '',
  weight: '',
};

export const validator = updateGroup<Form>({
  haveClaimNumber: validate(required),
  claimNumber: (c, f) =>
    f.value.haveClaimNumber ? validate(c, required, digits, length(8)) : optional(setValue(c, '')),
  legalFirstName: validate(required, minLength(2)),
  preferredFirstName: optional(),
  middleName: optional(),
  lastName: validate(required, minLength(2)),
  dateOfBirth: validate(required),
  demographics: updateGroup({
    sexAtBirth: validate(required),
    gender: optional(),
    customGender: (c, f) =>
      f.value.gender === '__<CUSTOM>__'
        ? validate(c, required, minLength(4))
        : optional(setValue(c, '')),
    pronouns: optional(),
    customPronouns: (c, f) =>
      f.value.pronouns === '__<CUSTOM>__'
        ? validate(c, required, minLength(4))
        : optional(setValue(c, '')),
    indigenousInd: (c) => optional(c),
    ancestry: optional(),
    associationNation: optional(),
  }),
  havePhn: validate(required),
  // TODO: verify first character is '9'
  phn: (c, f) =>
    f.value.havePhn ? validate(c, required, digits, length(10)) : optional(setValue(c, '')),
  interpreter: validate(required),
  preferredLanguage: (c, f) =>
    f.value.interpreter ? validate(c, required) : optional(setValue(c, '')),
  heightFeet: (c) => optional(c, digits),
  heightInches: (c) => optional(c, digits),
  // TODO: create overload of optional method to interpret call without passing control state
  weight: (c) => optional(c, digits),
});

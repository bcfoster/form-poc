import { disable, enable, setErrors, updateGroup } from 'ngrx-forms';
import { email, required } from 'ngrx-forms/validation';

import { optional } from '../../ngrx-forms/optional';
import { postalCode } from '../../ngrx-forms/postal-code';
import { validate } from '../../ngrx-forms/validate';
import { zipCode } from '../../ngrx-forms/zip-code';
import { digits } from '../../ngrx-forms/digits';
import { length } from '../../ngrx-forms/length';

export interface AddressForm {
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  addressExtra: string;
}

export interface PhoneForm {
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  extension: string;
}

export interface Form {
  address: AddressForm;
  phone: PhoneForm;
  email: string;
}

export const initialFormValue: Form = {
  address: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    province: 'BC',
    country: 'CA',
    postalCode: '',
    addressExtra: '',
  },
  phone: {
    homePhone: '',
    cellPhone: '',
    workPhone: '',
    extension: '',
  },
  email: '',
};

export const validator = updateGroup<Form>(
  {
    address: updateGroup({
      addressLine1: validate(required),
      addressLine2: optional(),
      city: validate(required),
      province: optional(),
      country: optional(),
      postalCode: (c, f) => validate(c, required, f.value.country === 'CA' ? postalCode : zipCode),
      addressExtra: (c) => optional(c),
    }),
    phone: updateGroup<PhoneForm>({
      homePhone: validate(required, digits, length(10)),
      cellPhone: validate(required, digits, length(10)),
      workPhone: validate(required, digits, length(10)),
      extension: optional(),
    }),
    email: validate(required, email),
  },
  {
    phone: (g) =>
      g.controls.homePhone.isValid || g.controls.cellPhone.isValid || g.controls.workPhone.isValid
        ? updateGroup(g, {
            homePhone: (c) => setErrors(c, {}),
            cellPhone: (c) => setErrors(c, {}),
            workPhone: (c) => setErrors(c, {}),
          })
        : g,
  },
);

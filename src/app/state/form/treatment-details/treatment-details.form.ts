import { FormGroupState, setValue, updateGroup } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

import * as formReducer from '../form.reducer';
import { earlierThan } from '../../ngrx-forms/earlier-than';
import { laterThan } from '../../ngrx-forms/later-than';
import { optional } from '../../ngrx-forms/optional';
import { validate } from '../../ngrx-forms/validate';
import { minWords } from '../../ngrx-forms/min-words';

export interface AuthorizationForm {
  authorizedToAccessInjuryInformation: boolean | null;
  isSigned: boolean | null;
  workerSignature: string;
}

export interface Form {
  haveReceivedFirstAid: boolean | null;
  dateReceivedFirstAid: string;
  dateReceivedFirstAidIsApproximate: boolean;
  typeOfFirstAidReceived: string;
  haveVisitedPractitioner: boolean | null;
  dateReceivedTreatment: string;
  isApproximateDate: boolean;
  clinicOrHospitalName: string;
  practitionerName: string;
  practitionerLastName: string;
  clinicOrHospitalAddress: string;
  clinicOrHospitalPhoneNumber: string;
  clinicTreatmentDetails: string;
  haveAppointmentBooked: boolean | null;
  firstAidReceivedDateApproximateIndicator: boolean | null;
  authorization: AuthorizationForm;
  additionalInformation: string;
}

export const initialFormValue: Form = {
  haveReceivedFirstAid: null,
  dateReceivedFirstAid: '',
  dateReceivedFirstAidIsApproximate: false,
  typeOfFirstAidReceived: '',
  haveVisitedPractitioner: null,
  dateReceivedTreatment: '',
  isApproximateDate: false,
  clinicOrHospitalName: '',
  practitionerName: '',
  practitionerLastName: '',
  clinicOrHospitalAddress: '',
  clinicOrHospitalPhoneNumber: '',
  clinicTreatmentDetails: '',
  haveAppointmentBooked: null,
  firstAidReceivedDateApproximateIndicator: null,
  authorization: {
    authorizedToAccessInjuryInformation: null,
    isSigned: null,
    workerSignature: '',
  },
  additionalInformation: '',
};

export const validator = (form: FormGroupState<formReducer.Form>) =>
  updateGroup<Form>(
    {
      haveReceivedFirstAid: validate(required),
      typeOfFirstAidReceived: (c, f) =>
        f.value.haveReceivedFirstAid ? validate(c, required, minWords(4)) : optional(c),
      haveVisitedPractitioner: validate(required),
      haveAppointmentBooked: (c, f) =>
        f.value.haveVisitedPractitioner ? optional(c) : validate(c, required),
      dateReceivedTreatment: (c, f) =>
        f.value.haveVisitedPractitioner
          ? validate(
              c,
              required,
              earlierThan(new Date().toISOString().split('T')[0]),
              laterThan(form.value.injuryAndIncident.incidentOverview.injuryDate),
            )
          : optional(c),
      isApproximateDate: optional(),
      clinicOrHospitalName: optional(),
      practitionerName: optional(),
      practitionerLastName: optional(),
      clinicOrHospitalAddress: optional(),
      clinicOrHospitalPhoneNumber: optional(),
      clinicTreatmentDetails: (c, f) =>
        f.value.haveVisitedPractitioner ? validate(c, required) : optional(c),
      firstAidReceivedDateApproximateIndicator: optional(),
      authorization: updateGroup<AuthorizationForm>({
        authorizedToAccessInjuryInformation: (c) =>
          form.value.personalAndContactInfo.representativeInformation.reportingForSelf
            ? validate(c, required)
            : optional(c),
      }),
      additionalInformation: (c) => optional(c),
    },
    {
      authorization: updateGroup<AuthorizationForm>({
        isSigned: (c, f) =>
          f.value.authorizedToAccessInjuryInformation ? validate(c, required) : optional(c),
        workerSignature: (c, f) =>
          f.value.authorizedToAccessInjuryInformation ? validate(c, required) : optional(c),
      }),
    },
    form.value.treatmentDetails.haveReceivedFirstAid === false
      ? {
          dateReceivedFirstAid: (c) => optional(setValue(c, initialFormValue.dateReceivedFirstAid)),
          dateReceivedFirstAidIsApproximate: (c) =>
            setValue(c, initialFormValue.dateReceivedFirstAidIsApproximate),
          typeOfFirstAidReceived: (c) =>
            optional(setValue(c, initialFormValue.typeOfFirstAidReceived)),
        }
      : {
          dateReceivedFirstAid: validate(
            required,
            earlierThan(new Date().toISOString().split('T')[0]),
            laterThan(form.value.injuryAndIncident.incidentOverview.injuryDate),
          ),
          typeOfFirstAidReceived: validate(required, minWords(4)),
        },
    form.value.treatmentDetails.haveVisitedPractitioner === false
      ? {
          dateReceivedTreatment: setValue(initialFormValue.dateReceivedTreatment),
          isApproximateDate: setValue(initialFormValue.isApproximateDate),
          clinicOrHospitalName: setValue(initialFormValue.clinicOrHospitalName),
          practitionerName: setValue(initialFormValue.practitionerName),
          practitionerLastName: setValue(initialFormValue.practitionerLastName),
          clinicOrHospitalAddress: setValue(initialFormValue.clinicOrHospitalAddress),
          clinicOrHospitalPhoneNumber: setValue(initialFormValue.clinicOrHospitalPhoneNumber),
          clinicTreatmentDetails: setValue(initialFormValue.clinicTreatmentDetails),
        }
      : {},
  );

import { createSelector } from '@ngrx/store';

import { form } from '.';

export const { selectForm, selectFormState, selectLastEdited } = form.feature;

export const selectFormValue = createSelector(selectForm, (form) => form.value);

export const selectPersonalAndContactInfoForm = createSelector(
  selectForm,
  (form) => form.controls.personalAndContactInfo,
);

export const selectIncidentAndInjuryForm = createSelector(
  selectForm,
  (form) => form.controls.injuryAndIncident,
);

export const incidentOverviewFormValue = createSelector(
  selectIncidentAndInjuryForm,
  (form) => form.value.incidentOverview,
);

export const selectTreatmentDetailsFrom = createSelector(
  selectForm,
  (form) => form.controls.treatmentDetails,
);

export const selectEmploymentAndEmployerInfoForm = createSelector(
  selectForm,
  (form) => form.controls.employmentAndEmployerInfo,
);

export const selectFormPercentComplete = createSelector(selectForm, (form) =>
  (form.userDefinedProperties['mandatory'] ?? 0)
    ? form.userDefinedProperties['valid'] / form.userDefinedProperties['mandatory']
    : 1,
);

export const selectIncidentAndInjuryDetailsFormPercentComplete = createSelector(
  selectIncidentAndInjuryForm,
  (form) =>
    (form.userDefinedProperties['mandatory'] ?? 0)
      ? form.userDefinedProperties['valid'] / form.userDefinedProperties['mandatory']
      : 1,
);

export const selectTreatmentDetailsFormPercentComplete = createSelector(
  selectTreatmentDetailsFrom,
  (form) =>
    (form.userDefinedProperties['mandatory'] ?? 0)
      ? form.userDefinedProperties['valid'] / form.userDefinedProperties['mandatory']
      : 1,
);

export const selectIsReportingForSelf = createSelector(
  selectPersonalAndContactInfoForm,
  (form) => form.value.representativeInformation.reportingForSelf,
);

export const selectIsTimelossInjury = createSelector(
  selectForm,
  (form) => form.value.isTimelossInjury,
);

export const isInjuryRecent = createSelector(incidentOverviewFormValue, (form) => {
  if (!form.injuryDate || !form.injuryTime) {
    return false;
  }

  const now = new Date();
  const date = new Date(Date.parse(`${form.injuryDate}T${form.injuryTime}Z`));
  return date > new Date(now.setDate(now.getDate() - 7));
});

// export const selectIsTimelossInjury = createSelector(selectIncidentAndInjuryForm, (form) => {
//   const work = form.value.incidentOverview.timelossIndicators.injuriesEffectOnWork;
//   const pay = form.value.incidentOverview.timelossIndicators.paychequeAffected;
//
//   if (work.haveMissedTimeAfterTheDay || work.likelyToMissMoreWork) {
//     return true;
//   }
//
//   return (
//     work.dutiesAdjusted &&
//     (pay.payAffectedByRegularHours ||
//       pay.payAffectedByOvertime ||
//       pay.payAffectedByAdjustedDuties ||
//       pay.payUnaffectedStillReceivingWage)
//   );
// });

import { disable, enable, FormGroupState, setValue, updateArray, updateGroup } from 'ngrx-forms';
import {
  greaterThan,
  greaterThanOrEqualTo,
  lessThanOrEqualTo,
  maxLength,
  minLength,
  number,
  required,
} from 'ngrx-forms/validation';

import * as formReducer from '../form.reducer';
import { accountNumber } from '../../ngrx-forms/account-number';
import { earlierThan } from '../../ngrx-forms/earlier-than';
import { minWords } from '../../ngrx-forms/min-words';
import { minYear } from '../../ngrx-forms/min-year';
import { optional } from '../../ngrx-forms/optional';
import { postalCode } from '../../ngrx-forms/postal-code';
import { validate } from '../../ngrx-forms/validate';
import {
  AttachmentType,
  EmploymentStatus,
  EmploymentType,
} from '../../../services/wrio-api.service';

export interface EmploymentDetailsForm {
  employmentType: EmploymentType | '';
  educationalInstitutionAndProgram: string;
  havePurchasedPersonalOptionalProtection: boolean | null;
  purchasedPersonalOptionalProtectionAccountNumber: string;
  accountantName: string;
  accountantPhoneNumber: string;
  socialInsuranceNumber: string;
  currentlyAttendingSchool: boolean | null;
  completedRecentProgramOfStudy: boolean | null;
  fieldOfStudy: string;
  schoolName: string;
  apprenticeshipProgramName: string;
  apprenticeshipCertificationNumber: string;
  attachmentType: AttachmentType | '';
  employmentStatus: EmploymentStatus | '';
  workedOver12Months: boolean | null;
  whenDidJobBegin: string | null;
  whenDidJobBeginIsApproximate: boolean;
  expectedJobEndDate: string | null;
  expectedJobEndDateIsApproximate: boolean;
  temporaryJobAdditionalInformation: string;
  completedSchoolName: string;
  completedFieldOfStudy: string;
}

export interface EmployerAddressForm {
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  addressExtra: string;
}

export interface EmployerInformationForm {
  jobTitle: string;
  name: string;
  contactName: string;
  otherEmployer: boolean | null;
  phoneNumber: string;
  extension: string;
  employerAddress: EmployerAddressForm;
  haveReportedInjury: boolean | null;
  dateReportedInjury: string;
  dateReportedInjuryIsApproximate: boolean;
  shouldContactForQuestions: boolean | null;
  whoReportedInjuryTo: string;
}

export interface ReportingToEmployerForm {
  haveReportedInjury: boolean | null;
  dateReportedInjury: string | null;
  dateReportedInjuryIsApproximate: boolean | null;
  whoReportedInjuryTo: string;
  whyNotReportedInjury: string;
  shouldContactForQuestions: boolean | null;
  phoneNumber: string;
  extension: string;
}

export interface WorkDay {
  hours: number;
  minutes: number;
}

export interface ShiftPatternForm {
  firstDay: string;
  pattern: {
    daysOn: number;
    daysOff: number;
  }[];
}

export interface ShiftInformationForm {
  workPattern: string;
  weekPaidHours: WorkDay[];
  daysOnOffRotation: string;
  shiftPattern: ShiftPatternForm;
  haveDaysNeverWorked: boolean | null;
  daysNeverWorked: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  averageWeeklyWorkHours: string;
  additionalInformation: string;
}

export interface EarningsForm {
  maintainedFullSalary: string;
  maintainedFullSalaryLength: string;
  injuryTimeReceivingBaseSalary: string;
  injuryTimeBaseSalaryAmount: number;
  injuryTimeBaseSalaryPeriod: string;
  additionalCompenstations: {
    bonuses: boolean;
    holidays: boolean;
    holidayPayPercentage: number;
    livingOutAllowance: boolean;
    overtime: boolean;
    overtimeHours: number;
    overtimePeriod: string;
    overtimeRegularDays: {
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
      sunday: boolean;
    };
    roomAndBoard: boolean;
    roomAndBoardAffectedByInjury: boolean | null;
    shiftDifferentialsPremiums: boolean;
    tips: boolean;
    tipsAverageAmount: number;
    tipsPeriod: string;
    other: boolean;
    describeOther: string;
    totalEarnings12WeeksPriorToInjury: number;
    none: boolean;
  };
}

export interface ReturnToWorkForm {
  missedTimeFromWorkAfterInjury: string;
  dateOfFirstMissedShiftAfterInjury: string | null;
  dateOfFirstMissedShiftAfterInjuryIsApproximate: boolean;
  lastDayWorkedForEmployer: string | null;
  lastDayWorkedForEmployerIsApproximate: boolean;
  workedPastDateOfInjury: boolean | null;
  lastDayWorkedScheduledHours: number;
  lastDayWorkedActualHours: number;
  haveReturnedToWork: string;
  noJobDescription: string;
  dateReturnedToWork: string | null;
  dateReturnedToWorkIsApproximate: boolean;
  changesToHoursOrDuties: boolean | null;
  changesToHoursOrDutiesDescription: string;
  estimatedReturnToWork: string;
  nextScheduledShiftDate: string | null;
  employerOfferedModifiedDuties: boolean;
  acceptedModifiedDuties: string;
  modifiedDutiesOfferDate: string | null;
  modifiedDutiesStartDate: string | null;
  modifiedDutiesStartDateIsApproximate: boolean;
  modifiedDutiesDescription: string;
}

export interface Form {
  employmentDetails: EmploymentDetailsForm;
  employerInformation: EmployerInformationForm;
  reportingToEmployer: ReportingToEmployerForm;
  shiftInformation: ShiftInformationForm;
  earnings: EarningsForm;
  returnToWork: ReturnToWorkForm;
  additionalInformation: string;
}

export const initialFormValue: Form = {
  employmentDetails: {
    employmentType: '',
    educationalInstitutionAndProgram: '',
    havePurchasedPersonalOptionalProtection: null,
    purchasedPersonalOptionalProtectionAccountNumber: '',
    accountantName: '',
    accountantPhoneNumber: '',
    socialInsuranceNumber: '',
    currentlyAttendingSchool: null,
    completedRecentProgramOfStudy: null,
    fieldOfStudy: '',
    schoolName: '',
    apprenticeshipProgramName: '',
    apprenticeshipCertificationNumber: '',
    attachmentType: '',
    employmentStatus: '',
    workedOver12Months: null,
    whenDidJobBegin: null,
    whenDidJobBeginIsApproximate: false,
    expectedJobEndDate: null,
    expectedJobEndDateIsApproximate: false,
    temporaryJobAdditionalInformation: '',
    completedSchoolName: '',
    completedFieldOfStudy: '',
  },
  employerInformation: {
    jobTitle: '',
    name: '',
    contactName: '',
    otherEmployer: null,
    phoneNumber: '',
    extension: '',
    employerAddress: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      province: '',
      country: '',
      postalCode: '',
      addressExtra: '',
    },
    haveReportedInjury: null,
    dateReportedInjury: '',
    dateReportedInjuryIsApproximate: false,
    shouldContactForQuestions: null,
    whoReportedInjuryTo: '',
  },
  reportingToEmployer: {
    haveReportedInjury: null,
    dateReportedInjury: null,
    dateReportedInjuryIsApproximate: null,
    whoReportedInjuryTo: '',
    whyNotReportedInjury: '',
    shouldContactForQuestions: null,
    phoneNumber: '',
    extension: '',
  },
  shiftInformation: {
    workPattern: '',
    weekPaidHours: [
      { hours: 0, minutes: 0 }, // mon
      { hours: 0, minutes: 0 }, // tue
      { hours: 0, minutes: 0 }, // wed
      { hours: 0, minutes: 0 }, // thu
      { hours: 0, minutes: 0 }, // fri
      { hours: 0, minutes: 0 }, // sat
      { hours: 0, minutes: 0 }, // sun
    ],
    daysOnOffRotation: '',
    shiftPattern: {
      firstDay: '',
      pattern: [{ daysOn: 0, daysOff: 0 }],
    },
    haveDaysNeverWorked: null,
    daysNeverWorked: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    averageWeeklyWorkHours: '',
    additionalInformation: '',
  },
  earnings: {
    maintainedFullSalary: '',
    maintainedFullSalaryLength: '',
    injuryTimeReceivingBaseSalary: '',
    injuryTimeBaseSalaryAmount: 0,
    injuryTimeBaseSalaryPeriod: '',
    additionalCompenstations: {
      bonuses: false,
      holidays: false,
      holidayPayPercentage: 0,
      livingOutAllowance: false,
      overtime: false,
      overtimeHours: 0,
      overtimePeriod: '',
      overtimeRegularDays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      roomAndBoard: false,
      roomAndBoardAffectedByInjury: null,
      shiftDifferentialsPremiums: false,
      tips: false,
      tipsAverageAmount: 0,
      tipsPeriod: '',
      other: false,
      describeOther: '',
      totalEarnings12WeeksPriorToInjury: 0,
      none: false,
    },
  },
  returnToWork: {
    missedTimeFromWorkAfterInjury: '',
    dateOfFirstMissedShiftAfterInjury: null,
    dateOfFirstMissedShiftAfterInjuryIsApproximate: false,
    lastDayWorkedForEmployer: null,
    lastDayWorkedForEmployerIsApproximate: false,
    workedPastDateOfInjury: null,
    lastDayWorkedScheduledHours: 0,
    lastDayWorkedActualHours: 0,
    haveReturnedToWork: '',
    noJobDescription: '',
    dateReturnedToWork: null,
    dateReturnedToWorkIsApproximate: false,
    changesToHoursOrDuties: null,
    changesToHoursOrDutiesDescription: '',
    estimatedReturnToWork: '',
    nextScheduledShiftDate: null,
    employerOfferedModifiedDuties: false,
    acceptedModifiedDuties: '',
    modifiedDutiesOfferDate: null,
    modifiedDutiesStartDate: null,
    modifiedDutiesStartDateIsApproximate: false,
    modifiedDutiesDescription: '',
  },
  additionalInformation: '',
};

export const validator = (form: FormGroupState<formReducer.Form>) =>
  updateGroup<Form>(
    {
      employmentDetails: updateGroup<EmploymentDetailsForm>({
        employmentType: validate(required),
        havePurchasedPersonalOptionalProtection: (c, f) =>
          f.value.employmentType === 'Proprietor' ? validate(c, required) : optional(c),
      }),
      employerInformation: updateGroup<EmployerInformationForm>({
        name: validate(required),
        jobTitle: validate(required),
        employerAddress: updateGroup<EmployerAddressForm>({
          addressLine1: validate(required),
          addressLine2: optional(),
          city: validate(required),
          province: validate(required),
          country: validate(required),
          postalCode: validate(required),
        }),
        haveReportedInjury: validate(required),
        otherEmployer: validate(required),
      }),
      additionalInformation: optional(),
    },
    form.value.isTimelossInjury
      ? {
          employmentDetails: updateGroup<EmploymentDetailsForm>({
            attachmentType: validate(required),
            employmentStatus: validate(required),
          }),
          shiftInformation: updateGroup<ShiftInformationForm>({
            workPattern: validate(required),
            weekPaidHours: (c, f) =>
              f.value.workPattern === 'SameShifts'
                ? updateArray(
                    c,
                    updateGroup<WorkDay>({
                      hours: validate(
                        required,
                        number,
                        greaterThanOrEqualTo(0),
                        lessThanOrEqualTo(24),
                      ),
                      minutes: validate(
                        required,
                        number,
                        greaterThanOrEqualTo(0),
                        lessThanOrEqualTo(59),
                      ),
                    }),
                  )
                : c,
            daysOnOffRotation: (c, f) =>
              f.value.workPattern === 'RotatingShifts' ? validate(c, required) : c,
            shiftPattern: (c, f) =>
              f.value.daysOnOffRotation === 'LessThanSix'
                ? updateGroup(c, {
                    firstDay: validate(required), // TODO: validate date
                    pattern: updateArray(
                      updateGroup({
                        daysOn: validate(required, number, greaterThan(0)),
                        daysOff: validate(required, number, greaterThan(0)),
                      }),
                    ),
                  })
                : c,
            haveDaysNeverWorked: (c, f) =>
              f.value.workPattern === 'NoPattern' ? validate(c, required) : c,
            // TODO: ensure at least one box is checked
            daysNeverWorked: (c, f) => (f.value.haveDaysNeverWorked ? c : c),
            averageWeeklyWorkHours: (c, f) =>
              f.value.workPattern === 'NoPattern' ? validate(c, required) : c,
            additionalInformation: optional(),
          }),
          earnings: updateGroup<EarningsForm>({
            maintainedFullSalary: validate(required),
            injuryTimeReceivingBaseSalary: validate(required),
            // TODO: additional compensations
          }),
          returnToWork: updateGroup<ReturnToWorkForm>({
            missedTimeFromWorkAfterInjury: validate(required),
          }),
        }
      : {},
  );

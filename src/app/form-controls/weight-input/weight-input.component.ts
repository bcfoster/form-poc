import { Component } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';

import { FormControlBase } from '../form-control-base.directive';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'weight-input',
  imports: [NgrxFormsModule, ValidationErrorsComponent, NgClass],
  templateUrl: 'weight-input.component.html',
  styles: ``,
})
export class WeightInputComponent extends FormControlBase {}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlState, NgrxFormsModule } from 'ngrx-forms';
import { SelectOptionComponent } from '../select-option/select-option.component';

@Component({
  selector: 'date-select-option',
  imports: [CommonModule, FormsModule, NgrxFormsModule, SelectOptionComponent],
  templateUrl: './date-select-option.component.html',
  styles: ``,
})
export class DateSelectOptionComponent {
  @Input({ required: true }) year!: FormControlState<string>;
  @Input({ required: true }) month!: FormControlState<string>;
  @Input({ required: true }) day!: FormControlState<string>;

  get years(): { key: string; value: string }[] {
    const now = new Date();
    const start = new Date().getFullYear() - 12;
    const end = now.getFullYear() - 100;

    const options: { key: string; value: string }[] = [];

    for (let year = start; year >= end; year--) {
      options.push({ key: year.toString(), value: year.toString() });
    }

    return options;
  }

  get months(): { key: string; value: string }[] {
    return [
      { key: '0', value: 'January' },
      { key: '1', value: 'February' },
      { key: '2', value: 'March' },
      { key: '3', value: 'April' },
      { key: '4', value: 'May' },
      { key: '5', value: 'June' },
      { key: '6', value: 'July' },
      { key: '7', value: 'August' },
      { key: '8', value: 'September' },
      { key: '9', value: 'October' },
      { key: '10', value: 'November' },
      { key: '11', value: 'December' },
    ];
  }

  get days(): { key: string; value: string }[] {
    const options: { key: string; value: string }[] = [];

    for (let day = 1; day <= 31; day++) {
      options.push({ key: day.toString(), value: day.toString() });
    }

    return options;
  }
}

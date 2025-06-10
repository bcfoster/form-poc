import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroupState, NgrxFormsModule } from 'ngrx-forms';

import { BinaryRadioGroupComponent } from '../../../form-controls/binary-radio-group/binary-radio-group.component';
import { DateInputComponent } from '../../../form-controls/date-input/date-input.component';
import { MultiRadioGroupComponent } from '../../../form-controls/multi-radio-group/multi-radio-group.component';
import { SelectOptionComponent } from '../../../form-controls/select-option/select-option.component';
import { TextAreaComponent } from '../../../form-controls/text-area/text-area.component';
import { TextInputComponent } from '../../../form-controls/text-input/text-input.component';
import { WeightInputComponent } from '../../../form-controls/weight-input/weight-input.component';
import * as personalInfo from '../../../state/form/personal-and-contact-info/personal-info.form';

@Component({
  selector: 'personal-info-form',
  imports: [
    BinaryRadioGroupComponent,
    CommonModule,
    DateInputComponent,
    FormsModule,
    MultiRadioGroupComponent,
    NgrxFormsModule,
    SelectOptionComponent,
    TextInputComponent,
    TextAreaComponent,
    WeightInputComponent,
  ],
  templateUrl: './personal-info-form.component.html',
  styles: ``,
})
export class PersonalInfoFormComponent {
  @Input({ required: true }) form!: FormGroupState<personalInfo.Form>;
  @Input({ required: true }) reportingForSelf = false;

  protected readonly LANGUAGES = LANGUAGES;
}

export const LANGUAGES = [
  { key: 'af-za', value: 'Afrikaans (South Africa)' },
  { key: 'sq-al', value: 'Albanian (Albania)' },
  { key: 'am-et', value: 'Amharic (Ethiopia)' },
  { key: 'ar-sa', value: 'Arabic (Saudi Arabia)' },
  { key: 'hy-am', value: 'Armenian (Armenia)' },
  { key: 'as-in', value: 'Assamese (India)' },
  { key: 'az-latn-az', value: 'Azerbaijani (Latin, Azerbaijan)' },
  { key: 'bn-bd', value: 'Bangla (Bangladesh)' },
  { key: 'eu-es', value: 'Basque (Basque)' },
  { key: 'be-by', value: 'Belarusian (Belarus)' },
  { key: 'bs-latn-ba', value: 'Bosnian (Latin, Bosnia and Herzegovina)' },
  { key: 'bg-bg', value: 'Bulgarian (Bulgaria)' },
  { key: 'ca-es', value: 'Catalan (Catalan)' },
  { key: 'zh-cn', value: 'Chinese (Simplified, China)' },
  { key: 'zh-tw', value: 'Chinese (Traditional, Taiwan)' },
  { key: 'hr-hr', value: 'Croatian (Croatia)' },
  { key: 'cs-cz', value: 'Czech (Czech Republic)' },
  { key: 'da-dk', value: 'Danish (Denmark)' },
  { key: 'prs-af', value: 'Dari (Afghanistan)' }, // Note: ISO 639-1 code 'fa' for Persian, but 'prs' used in Windows
  { key: 'nl-nl', value: 'Dutch (Netherlands)' },
  { key: 'en-us', value: 'English (United States)' },
  { key: 'en-gb', value: 'English (United Kingdom)' },
  { key: 'et-ee', value: 'Estonian (Estonia)' },
  { key: 'fil-ph', value: 'Filipino (Philippines)' },
  { key: 'fi-fi', value: 'Finnish (Finland)' },
  { key: 'fr-fr', value: 'French (France)' },
  { key: 'fr-ca', value: 'French (Canada)' },
  { key: 'gl-es', value: 'Galician (Galician)' },
  { key: 'ka-ge', value: 'Georgian (Georgia)' },
  { key: 'de-de', value: 'German (Germany)' },
  { key: 'el-gr', value: 'Greek (Greece)' },
  { key: 'gu-in', value: 'Gujarati (India)' },
  { key: 'ha-latn-ng', value: 'Hausa (Latin, Nigeria)' },
  { key: 'he-il', value: 'Hebrew (Israel)' },
  { key: 'hi-in', value: 'Hindi (India)' },
  { key: 'hu-hu', value: 'Hungarian (Hungary)' },
  { key: 'is-is', value: 'Icelandic (Iceland)' },
  { key: 'ig-ng', value: 'Igbo (Nigeria)' },
  { key: 'id-id', value: 'Indonesian (Indonesia)' },
  { key: 'ga-ie', value: 'Irish (Ireland)' },
  { key: 'it-it', value: 'Italian (Italy)' },
  { key: 'ja-jp', value: 'Japanese (Japan)' },
  { key: 'kn-in', value: 'Kannada (India)' },
  { key: 'kk-kz', value: 'Kazakh (Kazakhstan)' },
  { key: 'km-kh', value: 'Khmer (Cambodia)' },
  { key: 'rw-rw', value: 'Kinyarwanda (Rwanda)' },
  { key: 'ko-kr', value: 'Korean (Korea)' },
  { key: 'ku-arab-iq', value: 'Kurdish (Arabic, Iraq)' }, // Note: ISO 639-1 code 'ku' for Kurdish
  { key: 'ky-kg', value: 'Kyrgyz (Kyrgyzstan)' },
  { key: 'lo-la', value: 'Lao (Laos)' },
  { key: 'lv-lv', value: 'Latvian (Latvia)' },
  { key: 'lt-lt', value: 'Lithuanian (Lithuania)' },
  { key: 'mk-mk', value: 'Macedonian (North Macedonia)' },
  { key: 'ms-my', value: 'Malay (Malaysia)' },
  { key: 'ml-in', value: 'Malayalam (India)' },
  { key: 'mt-mt', value: 'Maltese (Malta)' },
  { key: 'mi-nz', value: 'Maori (New Zealand)' },
  { key: 'mr-in', value: 'Marathi (India)' },
  { key: 'mn-mn', value: 'Mongolian (Mongolia)' },
  { key: 'ne-np', value: 'Nepali (Nepal)' },
  { key: 'nb-no', value: 'Norwegian, Bokmål (Norway)' },
  { key: 'nn-no', value: 'Norwegian, Nynorsk (Norway)' },
  { key: 'or-in', value: 'Odia (India)' },
  { key: 'ps-af', value: 'Pashto (Afghanistan)' },
  { key: 'fa-ir', value: 'Persian (Iran)' },
  { key: 'pl-pl', value: 'Polish (Poland)' },
  { key: 'pt-br', value: 'Portuguese (Brazil)' },
  { key: 'pt-pt', value: 'Portuguese (Portugal)' },
  { key: 'pa-in', value: 'Punjabi (India)' },
  { key: 'quz-pe', value: 'Quechua (Peru)' }, // Note: ISO 639-1 code 'qu' for Quechua
  { key: 'ro-ro', value: 'Romanian (Romania)' },
  { key: 'ru-ru', value: 'Russian (Russia)' },
  { key: 'gd-gb', value: 'Scottish Gaelic (United Kingdom)' },
  { key: 'sr-cyrl-rs', value: 'Serbian (Cyrillic, Serbia)' },
  { key: 'sr-latn-rs', value: 'Serbian (Latin, Serbia)' },
  { key: 'si-lk', value: 'Sinhala (Sri Lanka)' },
  { key: 'sk-sk', value: 'Slovak (Slovakia)' },
  { key: 'sl-si', value: 'Slovenian (Slovenia)' },
  { key: 'so-so', value: 'Somali (Somalia)' },
  { key: 'es-es', value: 'Spanish (Spain)' },
  { key: 'es-mx', value: 'Spanish (Mexico)' },
  { key: 'sw-ke', value: 'Swahili (Kenya)' },
  { key: 'sv-se', value: 'Swedish (Sweden)' },
  { key: 'ta-in', value: 'Tamil (India)' },
  { key: 'te-in', value: 'Telugu (India)' },
  { key: 'th-th', value: 'Thai (Thailand)' },
  { key: 'ti-et', value: 'Tigrinya (Ethiopia)' },
  { key: 'tr-tr', value: 'Turkish (Turkey)' },
  { key: 'tk-tm', value: 'Turkmen (Turkmenistan)' },
  { key: 'uk-ua', value: 'Ukrainian (Ukraine)' },
  { key: 'ur-pk', value: 'Urdu (Pakistan)' },
  { key: 'ug-cn', value: 'Uyghur (China)' },
  { key: 'uz-latn-uz', value: 'Uzbek (Latin, Uzbekistan)' },
  { key: 'vi-vn', value: 'Vietnamese (Vietnam)' },
  { key: 'cy-gb', value: 'Welsh (United Kingdom)' },
  { key: 'wo-sn', value: 'Wolof (Senegal)' },
  { key: 'xh-za', value: 'Xhosa (South Africa)' },
  { key: 'yo-ng', value: 'Yoruba (Nigeria)' },
  { key: 'zu-za', value: 'Zulu (South Africa)' },
];

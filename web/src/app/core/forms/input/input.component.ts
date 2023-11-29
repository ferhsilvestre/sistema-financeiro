import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { v4 as uuid } from 'uuid';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

export type InputType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'number'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'email';

export const masks = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  ccExpiryDate: '00/0000',
  ccSecurityCode: '0009',
  cnh: '00000000000',
  rg: '00.000.000-0',
  date: '00/00/0000',
  licensePlate: 'SSS 0A00'
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    },
    provideNgxMask()
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective]
})
export class InputComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: InputType = 'text';
  @Input() autofocus = false;
  @Input() set mask(value: keyof typeof masks) {
    this.useMask = masks[value];
  }

  id = uuid();
  useMask: string = '';
}

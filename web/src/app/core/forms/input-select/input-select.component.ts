import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { inputUUID } from '@burand/angular/utils';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSelectComponent,
      multi: true
    }
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule, FormsModule],
})
export class InputSelectComponent extends ControlValueAccessorConnectorComponent {
  @Input() readonly = false;
  @Input() loading = false;
  @Input() items: unknown[] = [];
  @Input() placeholder: string;
  @Input() label: string;
  @Input() bindLabel: string;
  @Input() hideSelected = false;
  @Input() bindValue: string;
  @Input() notFoundText = 'Não foi possível carregar os itens da lista';
  @Input() clearable = false;
  @Input() multiple = false;

  id = inputUUID();

  @Output() changeSelect: EventEmitter<unknown> = new EventEmitter();

  onChangeSelect(event: unknown) {
    if (!event) return;
    this.changeSelect.emit(event);
  }
}

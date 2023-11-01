import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { inputUUID } from '@burand/angular/utils';

import { CommonModule } from '@angular/common';
import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

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
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
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

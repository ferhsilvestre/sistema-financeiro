import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

import { ControlValueAccessorConnectorComponent } from '../control-value-accessor-connector';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputEmailComponent,
      multi: true
    }
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbTypeaheadModule]
})
export class InputEmailComponent extends ControlValueAccessorConnectorComponent {
  @Input() placeholder: string;
  @Input() label: string;

  id = uuid();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      distinctUntilChanged(),
      map(term => {
        if (!term || term.indexOf('@') >= 0 || term.length < 1) {
          return [];
        }

        return ['dominio.com.br', 'gmail.com', 'hotmail.com', 'hotmail.com.br', 'outlook.com'].map(
          domain => `${term}@${domain}`
        );
      })
    );
}

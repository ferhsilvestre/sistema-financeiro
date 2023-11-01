import { Component, Injector, Input, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-base-input',
  template: ''
})
export class ControlValueAccessorConnectorComponent implements ControlValueAccessor {
  private controlDirective = new BehaviorSubject<FormControlDirective>(undefined);

  @ViewChild(FormControlDirective)
  set formControlDirective(value: FormControlDirective) {
    this.controlDirective.next(value);
  }

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  get control(): FormControl {
    return this.formControl || (this.controlContainer.control.get(this.formControlName) as FormControl);
  }

  constructor(protected injector: Injector) {}

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  async registerOnTouched(fn: unknown): Promise<void> {
    const valueAccessor = await this.getValueAccessor();
    valueAccessor.registerOnTouched(fn);
  }

  async registerOnChange(fn: unknown): Promise<void> {
    const valueAccessor = await this.getValueAccessor();
    valueAccessor.registerOnChange(fn);
  }

  async writeValue(obj: unknown): Promise<void> {
    const valueAccessor = await this.getValueAccessor();
    valueAccessor.writeValue(obj);
  }

  async setDisabledState(isDisabled: boolean): Promise<void> {
    const valueAccessor = await this.getValueAccessor();
    valueAccessor.setDisabledState(isDisabled);
  }

  private async getValueAccessor() {
    const { valueAccessor } = await firstValueFrom(
      this.controlDirective.pipe(filter(formControl => formControl !== undefined))
    );

    return valueAccessor;
  }
}

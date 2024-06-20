import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const dateRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const startDate: Date = control.get('startDate')?.value;
    const endDate: Date = control.get('endDate')?.value;
  
    // Verificar si las fechas son válidas y si la fecha de inicio no es posterior a la fecha de fin
    if (startDate && endDate && startDate > endDate) {
      return { dateRangeInvalid: true };
    }
  
    return null;
};

export const dateFormatValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const dateValue: string = control.value;
    const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
  
    // Verificar si la fecha cumple con el formato 'yyyy-MM-dd'
    if (dateValue && !dateFormatRegex.test(dateValue)) {
      return { invalidDateFormat: true };
    }
  
    return null;
};

export const dateExistsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const dateValue: string = control.value;

  if (dateValue) {
    const [month, day, year] = dateValue.split('-').map(Number);

    if (month < 1 || month > 12) {
      return { invalidMonth: true };
    }

    if (day < 1 || day > 31) {
      return { invalidDay: true };
    }

    if (year < 2000 || year > 2024) {
      return { invalidYear: true };
    }
  }

  return null;
};

export const chatTypeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const chatType: string = control.value;

  // Verificar si el tipo de chat es 'proveedor' o 'cliente'
  if (chatType !== 'proveedor' && chatType !== 'cliente' && chatType !== 'Proveedor' && chatType !== 'Cliente') {
    return { invalidChatType: true };
  }

  return null;
};
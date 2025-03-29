import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsValidBirthDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidBirthDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;

          const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
          if (!match) return false;
          const [_, year, month, day] = match.map(Number);
          console.log({ match: match.map(Number) });
          console.log('Hello');

          const today = new Date().toISOString().split('T')[0].split('-');
          console.log(today);
          if (year > Number(today[0])) return false;

          if (month > Number(today[1])) return false;

          if (month === Number(today[2]) && day > Number(today[2])) return false;

          if (month < 1 || month > 12) return false;

          const lastDay = new Date(year, month, 0).getDate();
          if (day < 1 || day > lastDay) return false;

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          const value = args.value;
          const errors: string[] = [];

          if (typeof value !== 'string') return 'Ngày sinh phải là chuỗi';
          if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return 'Định dạng phải là YYYY-MM-DD';

          const [_, yearStr, monthStr, dayStr] = value.match(/^(\d{4})-(\d{2})-(\d{2})$/) || [];

          const year = +yearStr,
            month = +monthStr,
            day = +dayStr;

          if (month < 1 || month > 12) errors.push('Tháng không hợp lệ');

          const today = new Date().toISOString().split('T')[0].split('-');
          console.log(today);
          if (year > Number(today[0])) errors.push('Năm vượt quá hiện tại');

          if (month > Number(today[1])) errors.push('tháng vượt quá hiện tại');

          if (month === Number(today[2]) && day > Number(today[2]))
            errors.push('ngày vượt quá hiện tại');

          if (month >= 1 && month <= 12) {
            const lastDay = new Date(year, month, 0).getDate();
            if (day < 1 || day > lastDay) errors.push('Ngày không hợp lệ');
          }
          console.log({ errors });

          return errors.length > 0 ? `${errors.join(', ')}.` : 'Ngày sinh không hợp lệ';
        },
      },
    });
  };
}

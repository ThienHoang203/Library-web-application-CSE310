import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsValidDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;

          const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

          if (!match) return false;

          const year = parseInt(match[1]);
          const month = parseInt(match[2]);
          const date = parseInt(match[3]);

          const today = new Date();
          let presentYear = today.getFullYear();
          let presentMonth = today.getMonth() + 1;
          let presentDate = today.getDate();

          if (year > presentYear) return false;

          if ((month > presentMonth && year === presentYear) || month > 12 || month < 1)
            return false;

          const lastDate = new Date(year, month - 1, 0).getDate();

          if (
            (date > presentDate && year === presentYear && month === presentMonth) ||
            date > lastDate ||
            date < 1
          )
            return false;

          return true;
        },
        defaultMessage({ value, ...args }: ValidationArguments) {
          const errorMessage: string[] = [];

          if (typeof value !== 'string') return 'Ngày không đúng loại';

          const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

          if (!match) return 'Ngày không đúng định dạng YYYY-MM-DD';
          console.log({ match });

          const year = parseInt(match[1]);
          const month = parseInt(match[2]);
          const date = parseInt(match[3]);

          const today = new Date();
          let presentYear = today.getFullYear();
          let presentMonth = today.getMonth() + 1;
          let presentDate = today.getDate();

          if (year > presentYear) errorMessage.push('Năm không hợp lệ');

          if ((month > presentMonth && year === presentYear) || month > 12 || month < 1)
            errorMessage.push('Tháng không hợp lệ');

          const lastDate = new Date(year, month - 1, 0).getDate();

          if (
            (date > presentDate && year === presentYear && month === presentMonth) ||
            date > lastDate ||
            date < 1
          )
            errorMessage.push('Ngày không hợp lệ');

          return `${errorMessage.join('. ')}!`;
        },
      },
    });
  };
}

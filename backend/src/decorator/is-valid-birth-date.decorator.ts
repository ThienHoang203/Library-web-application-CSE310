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
          console.log(match);

          if (!match) return false;

          const year = parseInt(match[1]);
          const month = parseInt(match[2]);
          const date = parseInt(match[3]);

          const lastDate = new Date(year, month, 0).getDate();

          if (month < 1 || month > 12) return false;

          if (date < 1 || date > lastDate) return false;

          const today = new Date();
          let presentYear = today.getFullYear();
          let presentMonth = today.getMonth() + 1;
          let presentDate = today.getDate();
          // const today = new Date().toISOString().split('T')[0].split('-');
          console.log({ presentDate, date, presentMonth, month });

          let age = presentYear - year;
          console.log({ age });
          if (month > presentMonth || (month == presentMonth && date > presentDate)) age--;

          console.log({ age });

          return age >= 15;
        },
        defaultMessage(args: ValidationArguments) {
          const value = args.value;

          if (typeof value !== 'string') return 'Ngày sinh phải là chuỗi';

          const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

          if (!match) return 'Định dạng phải là YYYY-MM-DD';

          const year = parseInt(match[1]);
          const month = parseInt(match[2]);
          const date = parseInt(match[3]);

          const lastDate = new Date(year, month, 0).getDate();

          if (month < 1 || month > 12) return 'Tháng sinh không hợp lệ';

          if (date < 1 || date > lastDate) return 'Ngày sinh không hợp lệ';

          const today = new Date();
          let presentYear = today.getFullYear();
          let presentMonth = today.getMonth();
          let presentDate = today.getDate();
          // const today = new Date().toISOString().split('T')[0].split('-');

          let age = year - presentYear;

          if (month > presentMonth || (month == presentMonth && date > presentDate)) age--;

          return age < 15 ? 'Chưa đủ 15 tuổi!' : 'Ngày sinh không hợp lệ';
        },
      },
    });
  };
}

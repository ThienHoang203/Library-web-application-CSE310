import { PickType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional } from 'class-validator';
import { IsValidBirthDate } from 'src/decorator/is-valid-birth-date.decorator';
import { BookFormat, BookGerne } from 'src/entities/book.entity';
import CreateBookDto from './create-book.dto';

export default class SearchBookDto extends PickType(CreateBookDto, [
  'title',
  'author',
  'genre',
  'format',
  'publishedDate',
  'version',
  'stock',
]) {
  @IsOptional()
  title: string;

  @IsEnum(BookFormat, {
    message: `format phải là ${Object.values(BookFormat).join(' hoặc ')}.`,
  })
  @IsOptional()
  format: BookFormat;

  @IsOptional()
  author: string;

  @IsEnum(BookGerne, {
    message: `format phải là ${Object.values(BookGerne).join(' hoặc ')}.`,
  })
  @IsOptional()
  genre: BookGerne;

  @IsValidBirthDate()
  @IsOptional()
  publishedDate: Date;

  @IsOptional()
  version: number;

  @IsOptional()
  stock: number;
}

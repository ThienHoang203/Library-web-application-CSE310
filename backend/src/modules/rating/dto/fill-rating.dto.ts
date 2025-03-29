import { PickType } from '@nestjs/mapped-types';
import { CreateRatingDto } from './create-rating.dto';
import { IsOptional } from 'class-validator';

export default class FillRatingDto extends PickType(CreateRatingDto, ['bookId', 'rating']) {
  @IsOptional()
  bookId: number;

  @IsOptional()
  rating: number;
}

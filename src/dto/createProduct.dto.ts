import { IsNotEmpty, IsNumber, Length, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @Length(0, 255)
  title: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @Length(0, 255)
  thumbnail: string;
}

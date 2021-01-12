import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(0)
  @MaxLength(20)
  name: string;

  @IsString()
  @MinLength(0)
  @MaxLength(20)
  description: string;
}

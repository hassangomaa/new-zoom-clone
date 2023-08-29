import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateSessionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;
}

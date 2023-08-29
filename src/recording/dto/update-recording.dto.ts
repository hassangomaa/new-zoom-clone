import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionDto } from '../dto/create-recording.dto';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {}

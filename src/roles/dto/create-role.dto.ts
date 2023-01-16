import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Unique user role value' })
  @IsString({message: "Must be a string"})
  readonly value: string;
  @ApiProperty({ example: 'Admimistrator', description: 'Role description' })
  @IsString({message: "Must be a string"})
  readonly description: string;
}

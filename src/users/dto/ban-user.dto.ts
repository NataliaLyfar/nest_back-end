import { IsNumber, IsString } from "@nestjs/class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '5', description: 'User id' })
  @IsNumber({}, {message: "Must be a number"})
  readonly userId: number;
  @ApiProperty({ example: 'hooliganism', description: 'Reason for the ban' })
  @IsString({message: "Must be a string"})
  readonly banReason: string;
}

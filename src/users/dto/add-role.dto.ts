import { IsNumber, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({ example: '5', description: 'User id' })
    @IsNumber({}, {message: "Must be a number"})
    readonly userId: number;
    @ApiProperty({ example: 'ADMIN', description: 'User role value' })
    @IsString({message: "Must be a string"})
    readonly value: string;
}
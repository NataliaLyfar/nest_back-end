import { IsEmail, IsString, Length } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsString({message: "Must be a string"})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;
    @ApiProperty({example: '1Sd25Yu!', description: 'User password'})
    @IsString({message: "Must be a string"})
    @Length(4, 16, {message: "No less than 4 and no more than 16 characters"})
    readonly password: string;
}
import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBidDto {
  @ApiProperty({ example: 'The best', description: 'Bid title' })
  @IsString({ message: 'Must be a string' })
  readonly title: string;

  @ApiProperty({
    example: 'The best content in the world',
    description: 'Bid content',
  })
  @IsString({ message: 'Must be a string' })
  readonly content: string;

  @ApiProperty({ example: 'Your bid image', description: 'Bid image' })
  readonly image: string;

  @ApiProperty({ example: 'Comments', description: 'Bid comments' })
  readonly comments: [];

  @ApiProperty({ example: 'Claim', description: 'Users claim' })
  readonly claim: string;

  @ApiProperty({ example: 5, description: 'User id' })
  readonly userId: number;
}

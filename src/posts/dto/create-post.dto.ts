import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'The best', description: 'Post title' })
  @IsString({ message: 'Must be a string' })
  readonly title: string;

  @ApiProperty({
    example: 'The best content in the world',
    description: 'Post content',
  })
  @IsString({ message: 'Must be a string' })
  readonly content: string;

  @ApiProperty({ example: 'Your post image', description: 'Post image' })
  readonly image: string;

  @ApiProperty({ example: 'Comments', description: 'Post comments' })
  readonly comments: [];

  @ApiProperty({ example: 'Claim', description: 'Users claim' })
  readonly claim: string;

  @ApiProperty({ example: 5, description: 'User id' })
  readonly userId: number;
}

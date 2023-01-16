import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface BidCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string
}

@Table({ tableName: 'bids' })
export class Bid extends Model<Bid, BidCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'The best bid', description: 'The bid title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'The best bid content in the world',
    description: 'The bid content',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: 'Your bid image', description: 'The bid image' })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: 'The best bid', description: 'The bid comments' })
  @Column({ type: DataType.ARRAY })
  comments: [];

  @ApiProperty({ example: 'Claim', description: 'Users claim' })
  @Column({ type: DataType.STRING })
  claim: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}

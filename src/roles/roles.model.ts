import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Unique user role value' })
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: "ADMIN" | "LESSOR" | "CLIENT";

  @ApiProperty({ example: 'Admimistrator', description: 'Role description' })
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}

import { USER_ROLE } from '@/shared/constants';
import { BaseEntity } from '@/shared/entities';
import { type TUserRole } from '@/shared/types/user.type';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ name: 'email', unique: true })
  email!: string;

  @Column({ name: 'password' })
  @Exclude()
  password!: string;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'avatar', nullable: true })
  avatar!: string;

  @Column({ name: 'is_active', default: false })
  isActive!: boolean;

  @Column({
    name: 'role',
    default: USER_ROLE.USER,
  })
  role!: TUserRole;

  @Column({ name: 'isBanned', default: false })
  isBanned!: boolean;

  @Column({ name: 'otp', nullable: true })
  otp!: string;
}

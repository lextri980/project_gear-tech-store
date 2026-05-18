import { USER_ROLE } from '@/shared/constants';
import { BaseEntity } from '@/shared/entities';
import type { TUserGender, TUserRole } from '@/shared/types/user.type';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'email', unique: true, nullable: true })
  email?: string;

  @Column({ name: 'phone', unique: true })
  phone!: string;

  @Column({ name: 'password' })
  @Exclude()
  password!: string;

  @Column({ name: 'dob', nullable: true })
  dob?: string;

  @Column({ name: 'gender', nullable: true })
  gender?: TUserGender;

  @Column({ name: 'avatar', nullable: true })
  avatar?: string;

  @Column({
    name: 'role',
    default: USER_ROLE.USER,
  })
  role!: TUserRole;

  @Column({ name: 'is_active', default: false })
  isActive!: boolean;

  @Column({ name: 'isBanned', default: false })
  isBanned!: boolean;

  @Column({ name: 'otp', nullable: true })
  otp?: string;
}

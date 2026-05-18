import { Expose } from 'class-transformer';

export class NewUserResponseDto {
  @Expose()
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  email!: string;

  @Expose()
  phone!: string;

  @Expose()
  role!: string;
}

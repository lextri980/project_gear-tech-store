import { MESSAGE } from '@/shared/constants';
import { TransformDataUtil } from '@/utils';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { RegisterDto } from './dto';
import { NewUserResponseDto } from './dto/new-user-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * [Service]
   * @controller AuthController.register
   */
  async register(body: RegisterDto) {
    const checkUser = await this.userRepo.findOne({
      where: [{ email: body.email }, { phone: body.phone }],
    });
    if (checkUser) {
      throw new BadRequestException(MESSAGE.USER.MAIL_PHONE_ALREADY_EXISTS);
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = this.userRepo.create({
      ...body,
      password: hashedPassword,
    });
    await this.userRepo.save(newUser);
    return TransformDataUtil.plainToClass(NewUserResponseDto, newUser);
  }
}

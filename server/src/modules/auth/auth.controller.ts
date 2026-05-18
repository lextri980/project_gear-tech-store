import { MESSAGE } from '@/shared/constants';
import { ResponseUtil } from '@/utils';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { type Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * [Route] POST /auth/register
   * [Description] Register a new user
   */
  @Post('register')
  async register(@Res() res: Response, @Body() body: RegisterDto) {
    const response = await this.authService.register(body);
    return ResponseUtil.created(res, response, MESSAGE.USER.REGISTER_SUCCESS);
  }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Request } from 'express';
import { validate as isUUID } from 'uuid';

@Injectable()
export class UuidValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest<Request>();
    const params = request.params;

    // Check all parameters that end with 'Id' for UUID format
    for (const [key, value] of Object.entries(params)) {
      if (key.toLowerCase().endsWith('id') && typeof value === 'string') {
        if (!isUUID(value)) {
          throw new UnprocessableEntityException(
            `Invalid UUID format for parameter: ${key}`,
          );
        }
      }
    }

    return next.handle();
  }
}

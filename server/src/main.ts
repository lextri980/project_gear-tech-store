import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from './filters';
import { UuidValidationInterceptor } from './interceptors';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new UuidValidationInterceptor());

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

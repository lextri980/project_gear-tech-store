import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Gear Tech Store')
  .setDescription('API documentation for the Gear Tech Store application')
  .setVersion('1.0')
  .build();

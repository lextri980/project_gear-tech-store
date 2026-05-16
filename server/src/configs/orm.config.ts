import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TEnvironmentConfig } from './env.config';

export const createTypeOrmOptions = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const envConfig = configService.get<TEnvironmentConfig>('env');

  return {
    type: 'postgres',
    host: envConfig?.dbHost,
    port: envConfig?.dbPort,
    username: envConfig?.dbUsername,
    password: envConfig?.dbPassword,
    database: envConfig?.dbName,
    synchronize: true,
    autoLoadEntities: true,
  };
};

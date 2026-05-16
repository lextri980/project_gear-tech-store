import { registerAs } from '@nestjs/config';

export type TEnvironmentConfig = {
  dbHost: string;
  dbPort: number;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  mailHost: string;
  mailPort: number;
  mailUsername: string;
  mailPassword: string;
};

export const envConfig = registerAs(
  'env',
  (): TEnvironmentConfig => ({
    // Database information
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: Number(process.env.DB_PORT) || 5432,
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'password',
    dbName: process.env.DB_NAME || 'chatapp',
    // JWT information
    jwtSecret: process.env.JWT_SECRET || 'secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '604800s',
    // Mail information
    mailHost: process.env.EMAIL_HOST || 'smtp.gmail.com',
    mailPort: Number(process.env.EMAIL_PORT) || 465,
    mailUsername: process.env.EMAIL_USERNAME || 'your-email@gmail.com',
    mailPassword: process.env.EMAIL_PASSWORD || 'your-password',
  }),
);

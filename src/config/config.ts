import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mailTrap: string | undefined;
  googleApp: string;
  googleEmail: string;
  scout92: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mailTrap: process.env.MAILTRAP_API_KEY as string,
  googleApp: process.env.GOOGLE_APP_PASS as string,
  googleEmail: process.env.GOOGLE_EMAIL_SENDER as string,
  scout92: process.env.SCOUT92_EMAIL as string,
};

export default config;

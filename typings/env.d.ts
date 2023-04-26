import { jobTypes } from "../common/scheduler/types";
import { logLevelsStr } from "../frameworks/winston/types";


declare global {
  namespace NodeJS {

    interface Env {
      readonly APP_URL: string;
      readonly NODE_ENV: 'development' | 'test' | 'production' | undefined;
      readonly NO_LOG: 'true' | 'false' | undefined;
      readonly LOG_LEVELS: logLevelsStr | 'all' | undefined;
      readonly NOT_LOG_LEVELS: logLevelsStr | undefined;
      readonly GEN_API_MAP: 'true' | 'false' | undefined
      readonly DEBUG: 'true' | 'false' | undefined;
      readonly LOG_SQL: 'true' | 'false' | undefined;
      readonly IS_DOCKER: 'true' | 'false' | undefined;
      readonly PORT: string | undefined;
      // PASSWORDS
      readonly ADMIN_PASSWORD: string;
      readonly SONARQUBE_TOKEN: string;
      readonly WEBSHARE_PROXY_PASSWORD: string;
      readonly CVM_PASSWORD: string;
      readonly POSTGRESQL_PASSWORD: string;
      readonly AWS_S3_SECRET: string
      readonly AWS_S3_SECRET_READ: string
      readonly EMAIL_PASSWORD: string
      readonly ALPHA_VANTAGE_API_KEY: string;
      readonly ALPHA_VANTAGE_API_KEY_2: string;
      readonly WEB_SHARE_API_KEY: string;
      readonly HG_API_KEY: string;
      readonly XP_API_KEY: string;
      readonly AUTH_TOKEN_ENCRYPTION_KEY: string;
      // AUTH
      readonly AUTH_TOKEN: string;
      // JOBS
      readonly STARTUP_JOBS?: jobTypes | undefined

    }
    interface ProcessEnv extends Env {}
  }
}

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAIL_JS_SERVICE: string;
      NEXT_PUBLIC_EMAIL_JS_TEMPLATE: string;
      NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
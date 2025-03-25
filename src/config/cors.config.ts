import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN

export const corsConfig: CorsOptions = {
  origin: [
    CLIENT_ORIGIN,
    'http://localhost:5173', 
    'http://localhost:3000', 
  ],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', "Cookie"],
  credentials: true,
};

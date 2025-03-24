import { z } from 'zod';
import { Role } from '@prisma/client';

// Define the Zod schema
export const createEmployeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  role: z.nativeEnum(Role).default(Role.intern), // Default role: intern
});

// Infer TypeScript type from Zod schema
export type CreateEmployeeDto = z.infer<typeof createEmployeeSchema>;

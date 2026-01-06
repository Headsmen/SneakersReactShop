import type { z } from 'zod';
import type { orderSchema } from './validation';

export type OrderFormData = z.infer<typeof orderSchema>;

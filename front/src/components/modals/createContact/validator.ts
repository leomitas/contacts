import { z } from 'zod'

export const schema = z.object({
    email: z.string().optional(),
    phone: z.string().optional(),
    name: z.string().min(6, 'Mínimo 6 caracteres').optional()
})

export type CreateContactData = z.infer<typeof schema>
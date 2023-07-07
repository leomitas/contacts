import { z } from 'zod'

export const schema = z.object({
    email: z.string().optional(),
    phone: z.string().optional(),
    name: z.string().optional()
})

export type EditContactData = z.infer<typeof schema>
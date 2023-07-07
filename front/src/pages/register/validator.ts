import { z } from 'zod'

export const schema = z.object({
    name: z.string().nonempty('Nome é obrigatória').min(6, 'Minimo 6'),
    email: z.string().email('Deve ser um e-mail').nonempty('Email é obrigatória'),
    phone: z.string().nonempty('Telefone é obrigatória'),
    password: z.string().nonempty('Senha é obrigatória')
})

export type RegisterData = z.infer<typeof schema>
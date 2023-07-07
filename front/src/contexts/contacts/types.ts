export interface iContact {
    id: string
    created_at: string
    name: string
    email: string
    phone: string
    client_id: number
}
export interface iEditContact {
    name?: string
    email?: string
    phone?: string
}
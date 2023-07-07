import { UseFormRegisterReturn } from "react-hook-form"

type tRegister = "name" | "email" | "phone" | "password"

export interface iInput {
    id: string
    label: string
    placeholder: string
    type: string
    disabled: boolean
    register:  UseFormRegisterReturn<tRegister>
    error?: string
}
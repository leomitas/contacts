import { useContext } from "react"
import { ClientContext } from "../../contexts/client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validator"
import { Input } from "../../components/input"


export const Login = () => {
    const { submitLogin } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    return (
      <main>
        <h2>login</h2>
        <form onSubmit={handleSubmit(submitLogin)}>
            <Input 
                id='email'
                label='Email'
                placeholder="Digite seu email"
                type="email"
                register={register('email')}
                error={errors['email']?.message}
                disabled={false}
            />
            <Input 
                id='password'
                label='Password'
                placeholder="Digite sua senha"
                type="password"
                register={register('password')}
                error={errors['password']?.message}
                disabled={false}
            />
            <button type="submit">Entrar</button>
        </form>
      </main>
    )
}
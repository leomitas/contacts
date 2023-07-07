import { useContext } from "react"
import { ClientContext } from "../../contexts/client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterData, schema } from "./validator"
import { Input } from "../../components/input"
import Header from "../../components/header"
import { RegisterStyled } from "./styled"


export const Register = () => {
    const { submitRegister } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>({
      resolver: zodResolver(schema)
    })

    return (
        <RegisterStyled>
        <Header />
          <main>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submitRegister)}>
              <Input 
                id='name'
                label='Nome'
                placeholder="Digite seu nome"
                type="text"
                register={register('name')}
                error={errors['name']?.message}
                disabled={false}
              />
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
                id='phone'
                label='Telefone'
                placeholder="Digite seu telefone"
                type="text"
                register={register('phone')}
                error={errors['phone']?.message}
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
              <button type="submit" className="button-brand">Registrar</button>
            </form>
          </main>
      </RegisterStyled>
    )
}
import { useContext } from "react"
import { ClientContext } from "../../contexts/client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validator"
import { Input } from "../../components/input"
import Header from "../../components/header"
import { Link } from "react-router-dom"
import { LoginStyled } from "./style"


export const Login = () => {
    const { submitLogin } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
      resolver: zodResolver(schema)
    })

    return (
      <LoginStyled>
        <Header />
        <main>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(submitLogin)}>
            <div className="div-inputs">
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
            </div>
            <button type="submit" className="button-brand">Entrar</button>
          </form>
          <p>Ainda não possui conta?</p>
          <Link to={'/register'}><button className="button-white">Cadastro</button></Link>
        </main>
      </LoginStyled>
    )
}
import { createContext, useEffect, useState } from "react"
import { TokenData, iClient } from "./types"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { LoginData } from "../../pages/login/validator"
import { RegisterData } from "../../pages/register/validator"
import jwtDecode from "jwt-decode"

interface Props {
  children: React.ReactNode
}

interface ClientProviderData  {    
  client: iClient | null
  setClient: React.Dispatch<React.SetStateAction<iClient | null>>
  submitLogin: (data: LoginData) => void
  submitRegister: (data: RegisterData) => void
  checkEmail(email: string): Promise<void>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  getProfile(): Promise<void>
}

export const ClientContext = createContext<ClientProviderData>({} as ClientProviderData)

export const ClientProvider = ({ children }: Props) => {
    const navigate = useNavigate()
    const [client, setClient] = useState<iClient | null>(null)
    const [verifiedEmail, setVerifiedEmail] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      const token = localStorage.getItem('token')
      if(!token) {
        navigate('/login')
      }
      getProfile()
    }, [])

    async function submitLogin(data: LoginData) {
      try {
        const response = await api.post("/login", data)
        const { token } = response.data
        api.defaults.headers.common.authorization = `Bearer ${token}`
        localStorage.setItem("token", token)
        navigate('/')
      } catch (error) {
        console.error(error)
      }
    }

    async function submitRegister(data: LoginData) {
    try {
        await api.post("/clients", data)
        navigate('/login')
      } catch (error) {
        console.error(error)
      }
    }

    async function getProfile() {
      const token = localStorage.getItem('token')
      const decodedToken: TokenData = jwtDecode(token!)
      try {
        const response = await api.get(`/clients/${decodedToken.sub}`, {headers: {Authorization: `Bearer ${token}`}})
        setClient(response.data)
        navigate("/")
      } catch (error) {
        console.error(error)
        navigate('/login')
      }
    }

    async function checkEmail(email: string) {
      try {
        const response = await api.get(`/clients/email`)

      } catch (error) {
        console.error(error)
      }
    }

    return (
      <ClientContext.Provider value={{
        client,
        setClient,
        submitLogin,
        submitRegister,
        checkEmail,
        isLoading, 
        setIsLoading,
        getProfile
      }}>
        { children }
      </ClientContext.Provider>
    )
}
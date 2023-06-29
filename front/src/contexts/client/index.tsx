import { createContext, useEffect, useState } from "react"
import { iClient, iContact } from "./types"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { LoginData } from "../../pages/login/validator"
import { RegisterData } from "../../pages/register/validator"

interface Props {
    children: React.ReactNode
}

interface ClientProviderData  {    
    client: iClient | null
    submitLogin: (data: LoginData) => void
    submitRegister: (data: RegisterData) => void
    contacts: iContact[] | null
}

export const ClientContext = createContext<ClientProviderData>({} as ClientProviderData)

export const ClientProvider = ({ children }: Props) => {
    const navigate = useNavigate()
    const [client, setClient] = useState<iClient | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [contacts, setContacts] = useState<iContact[] | null>(null)
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        api.defaults.headers.common.authorization = `Bearer ${token}`
        getProfile(token)
    }, [])

    async function submitLogin(data: LoginData) {
        console.log(data)
        try {
            const response = await api.post("/login", data)
      
            const { token } = response.data
      
            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("token", token)
      
            navigate('dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    async function submitRegister(data: LoginData) {
        console.log(data)
        try {
            await api.post("/client", data)
            navigate('login')
        } catch (error) {
            console.error(error)
        }
    }

    async function getContacts(authToken: string = token!) {
        try {
            const response = await api.get("/contacts", {headers: {Authorization: `Bearer ${authToken}`}})
      
            setContacts(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function getProfile(authToken: string = token!) {
        try {
            const response = await api.get(`/clients/${client?.id}`, {headers: {Authorization: `Bearer ${authToken}`}})
            setClient(response.data)
            navigate("/dashboard")
            setToken(authToken)
            getContacts(authToken)
        } catch (error) {
            console.error(error)
            setClient(null)
            localStorage.clear()
        }
    }

    return (
        <ClientContext.Provider value={{
            client,
            submitLogin,
            submitRegister,
            contacts
        }}>
            { children }
        </ClientContext.Provider>
    )
}
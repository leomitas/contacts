import { createContext, useEffect, useState } from "react"
import { iContact } from "./types"
import { api } from "../../services/api"
import jwtDecode from "jwt-decode"
import { TokenData } from "../client/types"

interface Props {
    children: React.ReactNode
}

interface ContactProviderData  {
    contacts: iContact[] | null
}

export const ContactContext = createContext<ContactProviderData>({} as ContactProviderData)

export const ContactProvider = ({ children }: Props) => {
    const [contacts, setContacts] = useState<iContact[] | null>(null)
    
    useEffect(() => {
        getContacts()
    }, [])

    async function getContacts() {
        const token = localStorage.getItem('token')
        try {
            const response = await api.get("/contacts", {headers: {Authorization: `Bearer ${token}`}})
            const decodedToken: TokenData = jwtDecode(token!)
            setContacts(response.data.filter((contact: iContact) => contact.client_id === +decodedToken.sub))
            console.log(response.data.filter((contact: iContact) => contact.client_id === +decodedToken.sub))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ContactContext.Provider value={{
            contacts
        }}>
            { children }
        </ContactContext.Provider>
    )
}
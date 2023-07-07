import { createContext, useEffect, useState } from "react"
import { iContact, iEditContact } from "./types"
import { api } from "../../services/api"
import jwtDecode from "jwt-decode"
import { TokenData } from "../client/types"

interface Props {
    children: React.ReactNode
}

interface ContactProviderData  {
    contacts: iContact[] | null
    submitContact(data: iEditContact): Promise<void>
    getContacts(): Promise<void>
    showModalEditContact: boolean
    setShowModalEditContact: React.Dispatch<React.SetStateAction<boolean>>
    editContact(data: iEditContact): Promise<void>
    showModalCreateContact: boolean
    setShowModalCreateContact: React.Dispatch<React.SetStateAction<boolean>>
    deleteContact(): Promise<void>
    showModalDeleteContact: boolean
    setShowModalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>
    idContact: number
    setIdContact: React.Dispatch<React.SetStateAction<number>>
    getContact(): Promise<void>
}

export const ContactContext = createContext<ContactProviderData>({} as ContactProviderData)

export const ContactProvider = ({ children }: Props) => {
    const [contacts, setContacts] = useState<iContact[] | null>(null)
    const [contact, setContact] = useState<iContact | null>(null)
    const [showModalEditContact, setShowModalEditContact] = useState<boolean>(false)
    const [showModalCreateContact, setShowModalCreateContact] = useState<boolean>(false)
    const [showModalDeleteContact, setShowModalDeleteContact] = useState<boolean>(false)
    const [idContact, setIdContact] = useState<number>(0)

    async function getContacts() {
      const token = localStorage.getItem('token')
      const decodedToken: TokenData = jwtDecode(token!)
      try {
         const response = await api.get("/contacts", {headers: {Authorization: `Bearer ${token}`}})
        setContacts(response.data.filter((contact: iContact) => contact.client_id === +decodedToken.sub))
      } catch (error) {
        console.error(error)
      }
    }

    async function getContact() {
      const token = localStorage.getItem('token')
      try {
        const response = await api.get(`/contacts/${idContact}`, {headers: {Authorization: `Bearer ${token}`}})
        setContact(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    async function submitContact(data: iContact) {
      const token = localStorage.getItem('token')
      try {
        await api.post("/contacts", data, {headers: {Authorization: `Bearer ${token}`}})
        setShowModalCreateContact(false)
      } catch (error) {
        console.error(error)
      }
    }
    
    async function editContact(data: iEditContact) {
      console.log(data)
      const token = localStorage.getItem('token')
      try {
        await api.patch(`/contacts/${idContact}`, data, {headers: {Authorization: `Bearer ${token}`}})
        setShowModalEditContact(false)
      } catch (error) {
        console.error(error)
      }
    }

    async function deleteContact() {
      const token = localStorage.getItem('token')
      try {
        await api.delete(`/contacts/${idContact}`, {headers: {Authorization: `Bearer ${token}`}})
        setShowModalDeleteContact(false)
      } catch (error) {
        console.error(error)
      }
    }

    return (
      <ContactContext.Provider value={{
        contacts,
        submitContact,
        getContacts,
        showModalEditContact, 
        setShowModalEditContact,
        editContact,
        showModalCreateContact,
        setShowModalCreateContact,
        deleteContact,
        showModalDeleteContact,
        setShowModalDeleteContact,
        idContact,
        setIdContact,
        getContact
      }}>
        { children }
      </ContactContext.Provider>
    )
}
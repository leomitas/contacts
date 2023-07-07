import { useContext, useEffect } from "react"
import { ContactContext } from "../../contexts/contacts"
import { DivContactsStyled } from "./styles"

export const Contacts = () => {
  const { contacts, getContacts, setShowModalEditContact, setShowModalCreateContact, setIdContact, setShowModalDeleteContact } = useContext(ContactContext)

  useEffect(() => {
    getContacts()
  }, [])

  const openModalEdit = (id: number) => {
    setShowModalEditContact(true)
    setIdContact(id)
  }

  const openModalCreate = () => {
    setShowModalCreateContact(true)
  }

  const openModalDelete = (id: number) => {
    setShowModalDeleteContact(true)
    setIdContact(id)
  }

  return (
    <DivContactsStyled>
      <h2>Contatos</h2>
      <button onClick={openModalCreate}>Criar contato</button>
      <ul>
        {contacts ? contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() => openModalEdit(+contact.id)}>Editar</button>
            <button onClick={() => openModalDelete(+contact.id)}>Deletar</button>
          </li>
        )) : <p>Sem contatos cadastrados</p>}
      </ul>
    </DivContactsStyled>
  )
}
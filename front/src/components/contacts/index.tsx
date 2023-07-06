import { useContext } from "react"
import { ContactContext } from "../../contexts/contacts"

export const Contacts = () => {
  const { contacts } = useContext(ContactContext)
  return (
    <>
      <p>Contatos</p>
        {contacts?.map((contact) => (
            <div>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <hr/>
            </div>
        ))}
    </>
  )
}

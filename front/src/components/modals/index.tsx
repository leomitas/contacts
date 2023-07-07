import { useContext } from "react"
import ModalCreateContact from "./createContact"
import ModalDeleteContact from "./deleteContact"
import ModalEditContact from "./editContact"
import { StyledModal } from "./styles"
import { ContactContext } from "../../contexts/contacts"

const ModalContact = () => 
  {const { showModalEditContact, showModalCreateContact, showModalDeleteContact } = useContext(ContactContext)

  return (
    <StyledModal>
      {showModalCreateContact && <ModalCreateContact />}
      {showModalEditContact && <ModalEditContact />}
      {showModalDeleteContact && <ModalDeleteContact />}
    </StyledModal>
  )
}

export default ModalContact
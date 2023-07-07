import { useContext } from "react"
import { ContactContext } from "../../../contexts/contacts"
import { StyledModalDelete } from "./styles"

const ModalDeleteContact = () => {
  const { setShowModalDeleteContact, deleteContact } = useContext(ContactContext)

  const closeModalDelete = () => {
    setShowModalDeleteContact(false)
  }

  return (
    <StyledModalDelete>
      <div>
        <h2>Deletar contato</h2>
        <button onClick={closeModalDelete} className="button-close">X</button>
      </div>
      <div>
        <button onClick={closeModalDelete} className="button">Fechar</button>
        <button onClick={() => deleteContact()} className="button">Deletar</button>
      </div>
    </StyledModalDelete>
  )
}

export default ModalDeleteContact
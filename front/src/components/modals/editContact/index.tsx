import { useContext } from "react"
import { ContactContext } from "../../../contexts/contacts"
import { Input } from "../../input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditContactData, schema } from "./validator"
import { StyledModalEdit } from "./styles"

const ModalEditContact = () => {
  const { setShowModalEditContact, editContact } = useContext(ContactContext)

  const closeModalEdit = () => {
    setShowModalEditContact(false)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<EditContactData>({
    resolver: zodResolver(schema)
  })

  return (
    <StyledModalEdit>
      <div>
        <h2>Editar contato</h2>
        <button onClick={closeModalEdit}>X</button>
      </div>
      <form onSubmit={handleSubmit(editContact)}>
        <Input 
          id='name'
          label='Nome'
          placeholder="Digite o nome"
          type="text"
          register={register('name')}
          error={errors['name']?.message}
          disabled={false}
        />
        <Input 
          id='email'
          label='Email'
          placeholder="Digite o email"
          type="email"
          register={register('email')}
          error={errors['email']?.message}
          disabled={false}
        />
        <Input 
          id='phone'
          label='Telefone'
          placeholder="Digite o telefone"
          type="text"
          register={register('phone')}
          error={errors['phone']?.message}
          disabled={false}
        />
        <button type="submit">Editar</button>
      </form>
    </StyledModalEdit>
  )
}

export default ModalEditContact
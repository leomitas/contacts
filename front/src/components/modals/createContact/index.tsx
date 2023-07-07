import { useContext } from "react"
import { ContactContext } from "../../../contexts/contacts"
import { Input } from "../../input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateContactData, schema } from "./validator"
import { StyledModalCreate } from "./styles"

const ModalCreateContact = () => {
  const { setShowModalCreateContact, submitContact } = useContext(ContactContext)

  const closeModalCreate = () => {
    setShowModalCreateContact(false)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<CreateContactData>({
    resolver: zodResolver(schema)
  })

  return (
    <StyledModalCreate>
      <div>
        <h2>Criar contato</h2>
        <button onClick={closeModalCreate}>X</button>
      </div>
      <form onSubmit={handleSubmit(submitContact)}>
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
        <button type="submit">Criar</button>
      </form>
    </StyledModalCreate>
  )
}

export default ModalCreateContact
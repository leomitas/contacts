import { useContext, useEffect } from "react"
import { Contacts } from "../../components/contacts"
import { ClientContext } from "../../contexts/client"
import Header from "../../components/header"
import { ContactContext } from "../../contexts/contacts"
import ModalContact from "../../components/modals"
import { StyledDashboard } from "./styles"

export const Dashboard = () => {
    const { client, isLoading, setIsLoading } = useContext(ClientContext)
    const { showModalEditContact, showModalCreateContact, showModalDeleteContact } = useContext(ContactContext)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }, [])

    if (isLoading) {
      return <div>Carregando...</div>;
    }

    return (
      <>
        <Header />
        <StyledDashboard>
          <p>Perfil</p>
          {client? (
            <div>
                <p>Nome: {client.name}</p>
                <p>Email: {client.email}</p>
                <p>Telefone: {client.phone}</p>
            </div>
          ) : <p>usuário nao logado</p>}
        </StyledDashboard>
        <Contacts />
        {showModalCreateContact && <ModalContact />}
        {showModalEditContact && <ModalContact />}
        {showModalDeleteContact && <ModalContact />}
      </>
    )
}
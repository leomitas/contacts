import { useContext } from "react"
import { Contacts } from "../../components/contacts"
import { ClientContext } from "../../contexts/client"

export const Dashboard = () => {
    const { client } = useContext(ClientContext)
    return (
      <>
        {/* <Header /> */}
        <p>Dados do cliente logado</p>
        {client? (
          <div>
              <p>{client.name}</p>
              <p>{client.email}</p>
              <p>{client.phone}</p>
          </div>
        ) : <p>usuário nao logado</p>}
        <hr/>
        <Contacts /> 
      </>
    )
}
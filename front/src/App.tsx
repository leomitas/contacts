import { ClientProvider } from "./contexts/client"
import { ContactProvider } from "./contexts/contacts"
import { RoutesMain } from "./routes"

export const App = () => {

  return (
    <>
      <ClientProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </ClientProvider>
    </>
  )
}

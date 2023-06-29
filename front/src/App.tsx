import { ClientProvider } from "./contexts/client"
import { RoutesMain } from "./routes"

export const App = () => {

  return (
    <>
      <ClientProvider>
        <RoutesMain />
      </ClientProvider>
    </>
  )
}

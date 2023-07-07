import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClientContext } from '../../contexts/client'
import { StyledHeader } from './style'

const Header = () => {
  const { client, setClient, getProfile } = useContext(ClientContext)
  
  const navigate = useNavigate()

  const desconect = () => {
    localStorage.clear()
    setClient(null)
    navigate('/login')
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <StyledHeader>
    {client ? (
        <div className="container">
          {client && (
            <h2 className='button'>{client.name.toUpperCase()}</h2>
          )}
          <button onClick={desconect} className='button'>Desconectar</button>
          </div>
    ) : (
        <div className="container">
          <Link to={"/login"} className='button'>Fazer Login</Link>
          <Link to={"/register"} className='button'>Cadastrar</Link>
        </div>
    )}
    </StyledHeader>
  )
}

export default Header
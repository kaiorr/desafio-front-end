import React from 'react'
import { Header, Title, Form } from './styles'
import { FaBuilding } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <>
      <Header>
      <Title><FaBuilding /> Localizador de Empresas</Title>

      <Form>
        <input type="text" placeholder="CNPJ..."/>
        <button type="submit">Localizar</button>
      </Form>
      </Header>
    </>
  )
}

export default Home
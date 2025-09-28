import { useState } from 'react'
import './App.css'
import Nav from "./variaveis/Nav"
import Apresentacao from './variaveis/Apresentacao'
import Projetos from './variaveis/Projetos'
import Reactjs from './variaveis/Reactjs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <main className='co'>
        <Apresentacao/>
        <Projetos nomepro="ola"/>
        <Reactjs/>
      </main>
    </>
  )
}

export default App

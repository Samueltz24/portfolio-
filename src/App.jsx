import { useState } from 'react'
import './App.css'
import Nav from "./variaveis/Nav"
import Apresentacao from './variaveis/Apresentacao'
import Projetos from './variaveis/Projetos'
import Reactjs from './variaveis/Reactjs'
import Skil from './variaveis/Skil'
import img from '../src/img/github.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <main className='co' id='co1'>
        <Apresentacao/>
        <Skil/>
        <Projetos nomepro="ola"/>
        <Reactjs/>
      </main>
        <footer className='footer'>
          <div className="apresetacao">
            <div className="conhe">
                <h2>
                  site criado por samuel tz 
                </h2>
            </div>
            <div className="conhe conhe1">
                <a href="https://github.com/Samueltz24?tab=repositories" target="_blank" className="imagem">
                  <img src={img} alt="" />
                </a>
            </div>
          </div>
        </footer>
    </>
  )
}

export default App

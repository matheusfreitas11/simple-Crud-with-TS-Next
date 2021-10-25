import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {database} from '../services/firebase'
import {FormEvent, useState} from 'react'


const Home: NextPage = () => {

  const [paciente, setPaciente] = useState('')
  const [atendimento, setAtendime] = useState('')
  const [sexo, setSexo] = useState('')
  const [nascimento, setNasc] = useState('')
  const [mrn, setMrn] = useState('')

  console.log(paciente,atendimento,sexo,nascimento,mrn)

  function gravar(event: FormEvent){
    event.preventDefault()

    const ref = database.ref('pacientes')

    const dados = {
      paciente,
      atendimento,
      sexo,
      nascimento,
      mrn
    }

    ref.push(dados)
  }

  
  return (

<> 
<main className={styles.container}>
  <form onSubmit = {gravar}>
    
    <input type="text" placeholder="Paciente" 
    onChange={event => setPaciente(event.target.value)}></input>
    
    <input type="number" placeholder="Atendimento" 
    onChange={event => setAtendime(event.target.value)}></input>

    <input type="text" placeholder="Sexo" 
    onChange={event => setSexo(event.target.value)}></input>
      
    <label htmlFor="dtnasc"></label>
      <input type="date" id="dtnasc" name="dtnasc" 
      onChange={event => setNasc(event.target.value)}></input>
    
    <input type="text" placeholder="MRN" 
    onChange={event => setMrn(event.target.value)}></input>
    
    <button type="submit">Enviar</button>
  </form>
    
    <div className={styles.typebox}>
      <input type="text" placeholder="Buscar Paciente"></input>
    
      <div className={styles.information}>
          <p className={styles.nomepaciente}>Matheus Freitas</p>
          
          <div className={styles.dados}> 
            <p>999999999</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
      </div>
    </div>
</main>
</>

  )
}

export default Home

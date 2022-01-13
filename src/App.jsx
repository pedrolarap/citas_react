import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'
import Paciente from './components/Paciente'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})


  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[])

  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  useEffect(()=>{

  },[paciente])

  return (
   <div className='container mx-auto mt-20'>
   <Header/>
   <div className="mt-12 md:flex">
   <Formulario
   pacientes={pacientes}
   setPacientes={setPacientes}
   paciente={paciente}
   setPaciente={setPaciente}
   />
   <ListaPacientes
   pacientes = {pacientes}
   setPaciente={setPaciente}
   eliminarPaciente={eliminarPaciente}
   />
   </div>
   </div>
  )
}

export default App

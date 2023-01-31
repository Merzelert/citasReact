import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({}) // editar pacientes

    const eliminarPaciente = (id) => { // eliminando paciente
        console.log('eliminando paciente ', id)
    }

    return (
        <div className='container mx-auto mt-20'>
            <Header />

            <div className='mt-12 md:flex'>
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente} />

                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente} 
                    eliminarPaciente={eliminarPaciente}/>
            </div>
        </div>
    )
}

export default App

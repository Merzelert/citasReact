import React from 'react'
import { useState, useEffect } from 'react'
import { Error } from './Error';

export const Formulario = ({ pacientes, setPacientes, paciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect (() => {

    }, [paciente])

    //generar id
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion de form
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {

            setError(true)
            return;
        }
        setError(false)

        //Objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()
        }

        setPacientes([...pacientes, objetoPaciente]);

        //Reiniciar el form 
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade pacientes y {''}
                <span className='text-emerald-600 font-bold'>Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

                {error && <Error><p>'Todos los campos son obligatorios'</p></Error>}

                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
                    <input
                        id='mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' type="text"
                        placeholder='Nombre de la mascota'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Propietario</label>
                    <input
                        id='propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' type="text"
                        placeholder='Nombre del propietario'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input
                        id='email'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' type="email"
                        placeholder='Email contacto del propietario'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
                    <input
                        id='alta'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea
                        id='sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' placeholder='Describe los sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)} />
                </div>

                <input
                    type="submit"
                    className='bg-emerald-600 w-full p-3 text-white uppercase font-bold hover:bg-emerald-700 cursor-pointer transition-colors'
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
}

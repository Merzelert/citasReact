import React from 'react'

export const Paciente = ({paciente, setPaciente}) => {
    
    const {nombre, propietario, email, fecha, sintomas} = paciente

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha Alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-between'>
                <button 
                type='button'
                className='py-2 px-10 bg-emerald-600 hover:bg-emerald-700 text-white fontt-bold uppercase rounded-xl'
                onClick={()=> setPaciente(paciente)}
                >Editar
                </button>

                <button 
                type='button'
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white fontt-bold uppercase rounded-xl'
                >Eliminar
                </button>
            </div>
        </div>
    )
}

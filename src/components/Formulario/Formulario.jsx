// !importar formlario:
import React from 'react';
import Form from './Form';

function Formulario() {
    return (
        <div className=" bg-indigo-400 md:w-1/2 sm:w-2/2 lg:w-2/5 text-justify m-2 p-5 rounded-md">
            <h2 className="font-black text-3xl text-center">
                Seguimiento pacientes
            </h2>

            <p className="text-lg mt-4 text-center mb-5">
                Añade pacientes {''}
                <span className="font-bold text-indigo-900">Administralos</span>
            </p>

            <Form />
        </div>
    );
}

export default Formulario;

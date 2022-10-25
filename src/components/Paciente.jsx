import React from 'react';

const Paciente = ({ paciente }) => {
    const { nombre, propietario, correo, alta, sintomas } = paciente;
    return (
        <div className=" bg-white shadow-md m-3 px-5 py-10 rounded-xl">
            {/* paciente: */}

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:{' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            {/* propietario */}

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo electronico:{' '}
                <span className="font-normal normal-case">{correo}</span>
            </p>
            {/* fecha alta */}

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta :{' '}
                <span className="font-normal normal-case">
                    {paciente.alta}{' '}
                </span>
            </p>
            {/* sintomas: */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:{' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
        </div>
    );
};

export default Paciente;

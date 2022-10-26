import React from 'react';

const Paciente = ({ paciente, setPaciente }) => {
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

            {/* Botnes de editar y eliminar */}

            <div
                className="flex justify-between mt-10
            "
            >
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold 0 rounded-md uppercase"
                    onClick={() => {
                        setPaciente(paciente);
                    }}
                >
                    Editar
                </button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold 0 rounded-md uppercase"
                    onClick={() => {
                        setPaciente(paciente);
                    }}
                >
                    Eliminar &times;
                </button>
            </div>
        </div>
    );
};

export default Paciente;

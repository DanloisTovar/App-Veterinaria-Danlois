import React from 'react';

const Paciente = () => {
    return (
        <div className=" bg-white shadow-md m-3 px-5 py-10 rounded-xl">
            {/* paciente: */}

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:{' '}
                <span className="font-normal normal-case">Paciente 1</span>
            </p>

            {/* propietario */}

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{' '}
                <span className="font-normal normal-case">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, explicabo! Ipsam nam sapiente delectus hic dolorum
                    nemo, voluptatum explicabo repudiandae omnis possimus
                    ratione error eligendi saepe accusamus eum ut alias.
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo electronico:{' '}
                <span className="font-normal normal-case">
                    Correo electronico
                </span>
            </p>
            {/* fecha alta */}

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta :{' '}
                <span className="font-normal normal-case">Fecha Alta </span>
            </p>
            {/* sintomas: */}
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:{' '}
                <span className="font-normal normal-case">Sintomas</span>
            </p>
        </div>
    );
};

export default Paciente;

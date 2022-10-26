import { React, useEffect } from 'react';
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente }) => {
    // verifica cambio en pacientes:
    useEffect(() => {
        pacientes.length > 0 &&
            console.log('Nuevo Paciente cargado', pacientes);
    }, [pacientes]);

    return (
        <div className=" bg-indigo-100 md:w-1/2 sm:w-2/2 lg:w-3/5 text-justify m-2 p-5 md:h-screen md:overflow-y-scroll rounded-xl">
            {pacientes && pacientes.length > 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado Pacientes
                    </h2>

                    <p className="text-xl mt-5 text-center mb-5">
                        Administra tus{' '}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                    {pacientes.map((paciente) => {
                        return (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                            />
                        );
                    })}
                    {/* <Paciente /> */}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay Pacientes
                    </h2>

                    <p className="text-xl mt-5 text-center mb-5">
                        Empieza a agregar pacientes,{' '}
                        <span className="text-indigo-600 font-bold">
                            Los veras listados en este lugar
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;

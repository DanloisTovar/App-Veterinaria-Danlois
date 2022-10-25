// !importar formlario:
import { React, useState } from 'react';

function Formulario({ setPacientes }) {
    // crear hook:
    // !Hooks para el state:
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // !validar formulario:
        if ([nombre, propietario, correo, alta, sintomas].includes('')) {
            console.log('hay un campo vacio');
            setError(true);
        } else {
            console.log('todos los campos estan llenos');
            setError(false);
        }

        setPacientes(nombre);
    };

    // Hook para validar errores:
    const [error, setError] = useState(false);

    return (
        <div className=" bg-indigo-400 md:w-1/2 sm:w-2/2 lg:w-2/5 text-justify m-2 p-5 rounded-md">
            <h2 className="font-black text-3xl text-center">
                Seguimiento pacientes
            </h2>
            <p className="text-lg mt-4 text-center mb-5">
                Añade pacientes {''}
                <span className="font-bold text-indigo-900">Administralos</span>
            </p>

            <form
                action="#"
                className="bg-white shadow-lg rounded-md py-5 px-3 mb-5"
                onSubmit={handleSubmit}
            >
                {/* mostar error */}
                {error && (
                    <div>
                        <p className="bg-red-600 text-white p-3 font-bold rounded-md uppercase text-center mb-5">
                            ¡Todos los campos son obligatorios!
                        </p>
                    </div>
                )}

                {/* Nombre mascota: */}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="mascota"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre Mascota"
                        className="border-2 w-full p-2 rounded-md mt-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        id="mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                {/* Nombre propietario: */}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="propietario"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre Propietario"
                        className="border-2 w-full p-2 rounded-md mt-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        id="propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                {/* email propietario */}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="correo"
                    >
                        Correo Electronico
                    </label>
                    <input
                        type="email"
                        placeholder="Correo Electronico"
                        className="border-2 w-full p-2 rounded-md mt-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        id="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>

                {/* Alta */}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="alta"
                    >
                        Alta
                    </label>
                    <input
                        type="date"
                        className="border-2 w-full p-2 rounded-md mt-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        id="alta"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                {/* sintomas */}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold mb-5"
                        htmlFor="sintomas"
                    >
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 border-2 w-full p-2 rounded-md mt-2 placeholder-gray-400"
                        placeholder="Indique los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                {/* boton */}

                <input
                    type="submit"
                    className="bg-indigo-600 w-full rounded-md text-white font-bold uppercase py-2 px-3 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer transition-all mb-5 mt-5"
                    value="Enviar"
                />
            </form>
        </div>
    );
}

export default Formulario;

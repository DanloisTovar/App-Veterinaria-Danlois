import React from 'react';

const Form = () => {
    return (
        <form
            action="#"
            className="bg-white shadow-lg rounded-md py-5 px-3 mb-5"
        >
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
                    id="mascota"
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
                />
            </div>

            {/* boton */}

            <input
                type="submit"
                className="bg-indigo-600 w-full rounded-md text-white font-bold uppercase py-2 px-3 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer transition-all mb-5 mt-5"
                value="Enviar"
            />
        </form>
    );
};

export default Form;

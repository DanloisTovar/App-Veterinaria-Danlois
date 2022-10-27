// import useState:
import { useState, useEffect } from 'react';

//* import librarys  and css:

// ? import components:
import Header from './Header';
import Formulario from './Formulario/Formulario';

import ListadoPacientes from './ListadoPacientes';

//!main component
function App() {
    // !Hooks para el state:
    const [pacientes, setPacientes] = useState([]);

    // !state para tomar el valor del input y editar pacientes de manera individual.
    // !este estate se pasa al compomente listado pacientes y al componente:
    const [paciente, setPaciente] = useState({});

    // *persistencia de datos en el local storage:
    useEffect(() => {
        const obtenerLS = () => {
            const pacientesLS =
                JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes(pacientesLS);
        };
        obtenerLS();
    }, []);

    // ! Agregar datos al local storage:
    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes]);

    // !! eliminar paciente:
    const eliminarPaciente = (id) => {
        const pacientesFiltrados = pacientes.filter((paciente) => {
            return paciente.id !== id;
        });
        console.log(pacientesFiltrados);
        setPacientes(pacientesFiltrados);
    };

    return (
        <div className="App container mx-auto mt-8">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />

                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;

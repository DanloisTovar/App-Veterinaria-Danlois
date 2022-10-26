// import useState:
import { useState } from 'react';

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

    return (
        <div className="App container mx-auto mt-8">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                />

                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                />
            </div>
        </div>
    );
}

export default App;

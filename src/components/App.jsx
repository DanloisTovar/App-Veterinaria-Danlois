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

    return (
        <div className="App container mx-auto mt-8">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario setPacientes={setPacientes} />
                <ListadoPacientes />
            </div>
        </div>
    );
}

export default App;

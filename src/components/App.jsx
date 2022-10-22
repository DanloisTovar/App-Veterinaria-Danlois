//* import librarys  and css:

// ? import components:
import Header from './Header';
import Formulario from './Formulario/Formulario';
import ListadoPacientes from './ListadoPacientes';

//!main component
function App() {
    return (
        <div className="App container mx-auto mt-8">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario />
                <ListadoPacientes />
            </div>
        </div>
    );
}

export default App;

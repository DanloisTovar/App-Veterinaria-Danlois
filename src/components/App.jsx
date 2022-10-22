//* import librarys  and css:

// ? import components:
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';

//!main component
function App() {
    return (
        <div className="App container mx-auto mt-8">
            <Header />
            <Formulario />
            <ListadoPacientes />
        </div>
    );
}

export default App;

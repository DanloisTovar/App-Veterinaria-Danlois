//* import librarys  and css:

// ? import components:
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

//!main component
function App() {
    return (
        <div className="App">
            <Header />
            <Formulario />
            <ListadoPacientes />
        </div>
    );
}

export default App;

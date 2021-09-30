import { ItemListContainer } from "./components/Container/ItemListContainer";
import { Navbar } from "./components/NavBar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo="Bienvenido a mi App"/>
      <ItemListContainer saludo="Reutilizando componentes"/>
    </div>
  );
}

export default App;
